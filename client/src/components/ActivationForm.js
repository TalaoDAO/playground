import React from 'react';

import {
    Container, Form, Button, Image, Row, Col
} from 'react-bootstrap';

import sucess_img from '../pages/img/success.png';

import QRCode from "react-qr-code";
import { Link } from 'react-router-dom';
const fetch = require("cross-fetch");
var W3CWebSocket = require('websocket').w3cwebsocket;


const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL, REACT_APP_WEBSOCKET_SERVER, REACT_APP_WALLET_LINK } = process.env;

async function submitUser(values) {
    return fetch(REACT_APP_NODE_LOCAL + '/create-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
        .then(data => data.json())
}

async function validateUser(values) {
    return fetch(REACT_APP_NODE_LOCAL + '/validate-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
        .then(data => data.json())
}


class ActivationForm extends React.Component {
    constructor(props) {
        super(props);
        this.client = null;
        this.state = {
            givenName: 'Jane',
            familyName: 'Doe',
            email: '',
            code: '',
            challenge: '',
            phase: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        console.log();
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const res = await submitUser(this.state);

        if (res.active) {
            this.setState({ phase: 2, challenge: res.challenge });
            this.setupWebhook(res.challenge);
        } else if (res.error) {
            alert('Error while submitting user data: ' + res.error);
        } else if (res.user_id) {
            this.setState({ phase: 1 });
        } else {
            alert('Something went wrong while submitting data, please try again later');
        }

        console.log('submission result in form=' + JSON.stringify(res));
    }

    async handleSubmitCode(event) {
        event.preventDefault();
        console.log(this.state.phase);
        const res = await validateUser(this.state);

        if (res.error) {
            alert('Error while validating user: ' + res.error);
        } else if (res.user_id) {
            this.setState({ phase: 2, challenge: res.challenge });
            this.setupWebhook(res.challenge);
        } else {
            alert('Something went wrong while validating the user, please try again later');
        }

        console.log('validation result in form=' + JSON.stringify(res));
    }


    async setupWebhook(challenge) {
        this.client=new W3CWebSocket(REACT_APP_WEBSOCKET_SERVER+"?challenge="+challenge);
        console.log("connecting to: "+REACT_APP_WEBSOCKET_SERVER+"?challenge="+challenge);
        this.client.onopen =  () => {
            console.log('WebSocket Client Connected');
            this.client.send(JSON.stringify({message:"handshake"}));
        };
        this.client.onmessage = (message) => {
            if(message.data.includes("success")){
                this.setState({phase:3});
            }else if(message.data.includes("failure")){
                this.setState({phase:4});
            }
            console.log(message);
        };
    }




    render() {
        if (this.state.phase == 0) {
            return (
                <div id="user-form">
                   <p className="subtitle-dark">Enter your information</p>
                    
                    <Form onSubmit={this.handleSubmit} >
                        <Form.Group className="mb-3" controlId="formGivenName">
                            <Form.Label>Given Name</Form.Label>
                            <Form.Control required type="text" name="givenName" value={this.state.givenName} onChange={this.handleChange} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formFamilyName">
                            <Form.Label>Family Name</Form.Label>
                            <Form.Control required type="text" name="familyName" value={this.state.familyName} onChange={this.handleChange} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="text" name="email" value={this.state.email} onChange={this.handleChange} />

                        </Form.Group>
                        <Button className="btn-dark-submit lower" variant="primary" type="submit">
                            VALIDATE
                        </Button>

                    </Form>
                </div>
            );

        } else if (this.state.phase == 1) {
            return (
                <div id="user-form">
                
                    <Form onSubmit={(e) => this.handleSubmitCode(e)} >
                        <p>{this.state.props}</p>
                        <Form.Group className="mb-3" controlId="formCode">
                            <Form.Label>Enter 4-digit code: </Form.Label>
                            <Form.Control required type="text" name="code" value={this.state.code} onChange={this.handleChange} />
                        </Form.Group>

                        <Button className="btn-dark-submit lower" variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                </div>
            );

        } else if (this.state.phase == 2) {
            return (
                <div id="user-form">
                    <div className='lg-only'>
                        <p className="subtitle-dark">Scan the QR with your mobile wallet</p>
                        <QRCode value={REACT_APP_QR_URL + "/email/" + this.state.challenge} size={128} />

                    </div>
                    <div className='sm-only'>
                        <Button className="btn-dark-submit " variant="primary"  href={REACT_APP_WALLET_LINK + encodeURIComponent(REACT_APP_QR_URL + "/email/" + this.state.challenge)}>Click to add to wallet</Button>
                    </div>
                </div>
            );
        } else if (this.state.phase == 3) {
            return (
            <div id="diplemployeroma-form">
                <Row>
                    <Col>
                        <span className="tag-h2">The certificate was added succesfully</span>
                    </Col>
                </Row>    
                <Row>
                    <Col>
                        <Image src={sucess_img}  fluid ></Image>
                    </Col>
                </Row>  
                
            </div>
            );
        } else if (this.state.phase == 4) {
            return (
                <div id="user-form">
                    Error while submitting the proof of email
                </div>
            );
        } else {
            return (
                <div id="user-form">Invalid form status: {this.state.phase}</div>
            );

        }


    }
}
export default ActivationForm;