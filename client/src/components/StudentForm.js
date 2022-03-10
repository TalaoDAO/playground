import React from 'react';

import {
    Container, Form, Button
} from 'react-bootstrap';

import QRCode from "react-qr-code";

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;

async function submitStudent(values) {
    return fetch(REACT_APP_NODE_LOCAL + '/api/create-student', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
        .then(data => data.json())
}


class StudentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            givenName: 'Jane',
            familyName: 'Doe',
            birthDate: '1991-12-10T12:02:55.268Z',
            directorName: 'Nicolas Muller',
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
        const res = await submitStudent(this.state);

        if(res.error){
            alert('Error while submitting diploma data: '+res.error);
        }else if(res.url){
            this.setState({ result: res.url });

        }else{
            alert('Something went wrong while submitting data, please try again later');
        }

        console.log('submission result in form=' + JSON.stringify(res));
    }





    render() {
        return (
            <div id="student-form-qr">
                {!this.state.result ?
                    <div id="student-form">
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
                            <Form.Group className="mb-3" controlId="formDirName">
                                <Form.Label>Director Name</Form.Label>
                                <Form.Control type="text" name="directorName" value={this.state.directorName} onChange={this.handleChange} />

                            </Form.Group>
                            <Button className="mb-3" variant="primary" type="submit">
                                Submit
                            </Button>

                        </Form>
                    </div>
                    :
                    <QRCode value={REACT_APP_QR_URL + "/student/" + this.state.result} size={128} />
                }
            </div>
        );
    }
}
export default StudentForm;