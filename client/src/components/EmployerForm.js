import React from 'react';

import {
    Container, Form, Button, Image
} from 'react-bootstrap';

import QRCode from "react-qr-code";
import sucess_img from '../pages/img/success.png';

var W3CWebSocket = require('websocket').w3cwebsocket;

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL, REACT_APP_WEBSOCKET_SERVER } = process.env;

async function submitEmployer(values) {
    return fetch(REACT_APP_NODE_LOCAL + '/create-employer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
        .then(data => data.json())
}

async function issueLoginChallenge() {
    return fetch(REACT_APP_NODE_LOCAL + '/create-authentication', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    })
        .then(data => data.json())
}


class EmployerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            givenName: 'Jane',
            familyName: 'Doe',
            startDate: '1991-12-10T12:02:55.268Z',
            jobTitle: 'Engineer',
            baseSalary: 'Open ended contract',
            employmentType: '65000 euros',
            result: null,
            phase:0,
            loginChallenge:null,
            email:null
        };

        this.handleLoginChallenge();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log();
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleLoginChallenge(){

        const res = await issueLoginChallenge();

        if(res.error){
            alert('Error while issuing login challenge: '+res.error);
        }else if(res.url){
            this.setState({ loginChallenge:res.url });
            this.setupLoginWebhook(res.url);

        }else{
            alert('Something went wrong while submitting data, please try again later');
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const res = await submitEmployer(this.state);

        if(res.error){
            alert('Error while submitting employer certificate data: '+res.error);
        }else if(res.url){
            this.setState({ result: res.url, phase:1 });
            this.setupWebhook(res.url);

        }else{
            alert('Something went wrong while submitting data, please try again later');
        }

        console.log('submission result in form=' + JSON.stringify(res));
    }


    async setupWebhook(url) {
        const [uuid, params] = url?.split("?");
  
        this.client=new W3CWebSocket(REACT_APP_WEBSOCKET_SERVER+"?challenge="+uuid);
        console.log("connecting to: "+REACT_APP_WEBSOCKET_SERVER+"?challenge="+uuid);
        this.client.onopen =  () => {
            console.log('WebSocket Client Connected');
            this.client.send(JSON.stringify({message:"handshake"}));
        };
        this.client.onmessage = (message) => {
            if(message.data.includes("success")){
                this.setState({phase:2});
            }else if(message.data.includes("failure")){
                this.setState({phase:3});
            }
            console.log(message);
        };
    }

    async setupLoginWebhook(url) {
        const [uuid, params] = url?.split("?");
  
        this.client=new W3CWebSocket(REACT_APP_WEBSOCKET_SERVER+"?challenge="+uuid);
        console.log("connecting to: "+REACT_APP_WEBSOCKET_SERVER+"?challenge="+uuid);
        this.client.onopen =  () => {
            console.log('WebSocket Client Connected');
            this.client.send(JSON.stringify({message:"handshake"}));
        };
        this.client.onmessage = (message) => {
            if(message.data.includes("success")){
                let info=JSON.parse(message.data);
                console.log("succesfull login for="+info.email)
                this.setState({email:info.email, familyName:info.familyName, givenName:info.givenName,phase:0});
            }else if(message.data.includes("failure")){
                this.setState({phase:3});
            }
            console.log(message);
        };
    }





    render() {
        if(this.state.email==null){
            if(this.state.loginChallenge==null){
                return(
                    <div id="employer-form">
                        <span className='Description-TAGUI_L-dark '>Loading...</span>
                    </div>   
                );
            }else{
                return(
                <div id="employer-form">
                    <QRCode value={REACT_APP_QR_URL + "/authentication/" + this.state.loginChallenge} size={128} />
                </div>   
                );             
            }
        }else{
            if (this.state.phase == 0) {
                return (
                    <div id="employer-form">
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
                                <Form.Group className="mb-3" controlId="formType">
                                    <Form.Label>Employment Type</Form.Label>
                                    <Form.Control type="text" name="employmentType" value={this.state.employmentType} onChange={this.handleChange} />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBaseSalary">
                                    <Form.Label>Base Salary</Form.Label>
                                    <Form.Control type="text" name="baseSalary" value={this.state.baseSalary} onChange={this.handleChange} />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formJobTitle">
                                    <Form.Label>Job Title</Form.Label>
                                    <Form.Control type="text" name="jobTitle" value={this.state.jobTitle} onChange={this.handleChange} />

                                </Form.Group>
                                <Button className="mb-3" variant="primary" type="submit">
                                    Submit
                                </Button>

                            </Form>
                        </div>
        );
            } else if (this.state.phase == 1) {
                return (
                    <div id="employer-form">
                        <QRCode value={REACT_APP_QR_URL + "/employment/" + this.state.result} size={128} />
                    </div>
                );
            } else if (this.state.phase == 2) {
                return (
                    <div id="diplemployeroma-form">
                        
                        <span className="Title-TAGH2">The certificate was added succesfully</span>
                        <Image src={sucess_img}  fluid ></Image>
                    </div>
                );
            } else if (this.state.phase == 3) {
                return (
                    <div id="employer-form">
                        Error while submitting the certificate
                    </div>
                );
            } else {
                return (
                    <div id="employer-form">Invalid form status: {this.state.phase}</div>
                );

            }
        }
    }
}
export default EmployerForm;