import React from 'react';

import {
    Container, Form, Button
} from 'react-bootstrap';

import QRCode from "react-qr-code";

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;

async function submitUser(values) {
    return fetch(REACT_APP_NODE_LOCAL + '/api/create-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
        .then(data => data.json())
}

async function validateUser(values) {
    return fetch(REACT_APP_NODE_LOCAL + '/api/validate-user', {
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
        this.state = {
            givenName: 'Jane',
            familyName: 'Doe',
            email:'',
            code:'',
            challenge:'',
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

        if(res.active){
            this.setState({ phase:2, challenge:res.challenge});
        }else if(res.error){
            alert('Error while submitting user data: '+res.error);
        }else if(res.user_id){
            this.setState({ phase:1});
        }else{
            alert('Something went wrong while submitting data, please try again later');
        }

        console.log('submission result in form=' + JSON.stringify(res));
    }

    async handleSubmitCode(event) {
        event.preventDefault();
        console.log(this.state.phase);
        const res = await validateUser(this.state);

        if(res.error){
            alert('Error while validating user: '+res.error);
        }else if(res.user_id){
            this.setState({ phase:2, challenge:res.challenge});
        }else{
            alert('Something went wrong while validating the user, please try again later');
        }

        console.log('validation result in form=' + JSON.stringify(res));
    }





    render() {
        if(this.state.phase==0){
            return (
                <div id="user-form">
                    <Form onSubmit={this.handleSubmit} >
                        <p>{this.state.props}</p>
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
                        <Button className="mb-3" variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                </div>
                );
                
        }else if(this.state.phase==1){
            return (
                <div id="user-form">
                    <Form onSubmit={(e) => this.handleSubmitCode(e)} >
                        <p>{this.state.props}</p>
                        <Form.Group className="mb-3" controlId="formCode">
                            <Form.Label>Enter 4-digit code: </Form.Label>
                            <Form.Control required type="text" name="code" value={this.state.code} onChange={this.handleChange} />
                        </Form.Group>
                    
                        <Button className="mb-3" variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                </div>
                );
                
        }else if(this.state.phase==2){
            return (
                <div id="user-form">
                    <QRCode value={REACT_APP_QR_URL + "/email/" + this.state.challenge} size={128} />
                </div>
                );
            }else{
            return (
                <div id="user-form">Invalid form status: {this.state.phase}</div>
            );

        }
        
    
    }
}
export default ActivationForm;