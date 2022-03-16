import React from 'react';

import {
    Container, Form, Button, Image, Row, Col
} from 'react-bootstrap';

import sucess_img from '../pages/img/success.png';
import QRCode from "react-qr-code";

var W3CWebSocket = require('websocket').w3cwebsocket;

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL, REACT_APP_WEBSOCKET_SERVER } = process.env;

async function submitDiploma(values) {
    return fetch(REACT_APP_NODE_LOCAL + '/create-diploma', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
        .then(data => data.json())
}


class DiplomaForm extends React.Component {
    constructor(props) {
        super(props);

        //decide on initial values
        let givenName='Jane';
        let familyName='Doe';
        let email='Doe';
        if(props && props.state){
            if( props.state.givenName){
                givenName=props.state.givenName;
            }
            if( props.state.familyName){
                familyName=props.state.familyName;
            }
            if( props.state.email){
                email=props.email;
            }
        }

        this.state = {
            givenName: givenName,
            familyName:  familyName,
            birthDate: '1991-12-10T12:02:55.268Z',
            credentialTitle: 'Master of Science',
            credentialDescription: 'Physics',
            result: null,
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
        const res = await submitDiploma(this.state);

        if (res.error) {
            alert('Error while submitting diploma data: ' + res.error);
        } else if (res.url) {
            this.setState({ result: res.url, phase: 1 });
            this.setupWebhook(res.url);

        } else {
            alert('Something went wrong while submitting data, please try again later');
        }

        console.log('submission result in form=' + JSON.stringify(res));
    }



    async setupWebhook(url) {
        const [uuid, params] = url?.split("?");

        this.client = new W3CWebSocket(REACT_APP_WEBSOCKET_SERVER + "?challenge=" + uuid);
        console.log("connecting to: " + REACT_APP_WEBSOCKET_SERVER + "?challenge=" + uuid);
        this.client.onopen = () => {
            console.log('WebSocket Client Connected');
            this.client.send(JSON.stringify({ message: "handshake" }));
        };
        this.client.onmessage = (message) => {
            if (message.data.includes("success")) {
                this.setState({ phase: 2 });
            } else if (message.data.includes("failure")) {
                this.setState({ phase: 3 });
            }
            console.log(message);
        };
    }




    render() {
        if (this.state.phase == 0) {
            return (
                <div id="diploma-form">
                    <Form onSubmit={this.handleSubmit} >
                        <p>{this.state.props}</p>
                        <Form.Group className="mb-3" controlId="formGivenName">
                            <Form.Label>Given Name</Form.Label>
                            <Form.Control type="text" name="givenName" value={this.state.givenName} onChange={this.handleChange} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formFamilyName">
                            <Form.Label>Family Name</Form.Label>
                            <Form.Control type="text" name="familyName" value={this.state.familyName} onChange={this.handleChange} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCredTitle">
                            <Form.Label>Credential Title</Form.Label>
                            <Form.Control type="text" name="credentialTitle" value={this.state.credentialTitle} onChange={this.handleChange} />

                        </Form.Group>
                        <Button className="mb-3" variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                </div>
            );
        } else if (this.state.phase == 1) {
            return (
                <div id="diploma-form">
                    <QRCode value={REACT_APP_QR_URL + "/learning/" + this.state.result} size={128} />
                </div>
            );
        } else if (this.state.phase == 2) {
            return (
                <div id="diploma-form">
                    
                    <Row>
                    <Col>
                        <span className="Title-TAGH2">The certificate was added succesfully</span>
                    </Col>
                </Row>    
                <Row>
                    <Col>
                        <Image src={sucess_img}  fluid ></Image>
                    </Col>
                </Row>  
                </div>
            );
        } else if (this.state.phase == 3) {
            return (
                <div id="diploma-form">
                    Error while submitting the certificate
                </div>
            );
        } else {
            return (
                <div id="diploma-form">Invalid form status: {this.state.phase}</div>
            );

        }

    }
}
export default DiplomaForm;