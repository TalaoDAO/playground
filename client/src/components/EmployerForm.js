import React from 'react';

import {
    Container, Form, Button
} from 'react-bootstrap';

import QRCode from "react-qr-code";

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;

async function submitEmployer(values) {
    return fetch(REACT_APP_NODE_LOCAL + '/api/create-employer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
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
            result: null
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
        const res = await submitEmployer(this.state);

        if(res.error){
            alert('Error while submitting employer certificate data: '+res.error);
        }else if(res.url){
            this.setState({ result: res.url });

        }else{
            alert('Something went wrong while submitting data, please try again later');
        }

        console.log('submission result in form=' + JSON.stringify(res));
    }





    render() {
        return (
            <div id="employer-form-qr">
                {!this.state.result ?
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
                    :
                    <QRCode value={REACT_APP_QR_URL + "/employer/" + this.state.result} size={128} />
                }
            </div>
        );
    }
}
export default EmployerForm;