import React from 'react';

import {
    Container, Form, Button, Image
} from 'react-bootstrap';

import QRCode from "react-qr-code";
import sucess_img from '../pages/img/success.png';

var W3CWebSocket = require('websocket').w3cwebsocket;

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL, REACT_APP_WEBSOCKET_SERVER } = process.env;





function EmployerForm(props) {
    const [state, setState] = React.useState({
        givenName: 'Jane',
        familyName: 'Doe',
        startDate: '1991-12-10T12:02:55.268Z',
        jobTitle: 'Engineer',
        baseSalary: 'Open ended contract',
        employmentType: '65000 euros',
        phase:0,
        email:null
    });
    const [res,_setRes] = React.useState(null);
    const [challenge,setChallenge] = React.useState(null);

    const setRes = (res) => {
        _setRes(res);
        handleResult(res);
    };



    function setupWebhook(url) {
        const [uuid, params] = url?.split("?");

        var client = new W3CWebSocket(REACT_APP_WEBSOCKET_SERVER + "?challenge=" + uuid);
        console.log("connecting to: " + REACT_APP_WEBSOCKET_SERVER + "?challenge=" + uuid);
        client.onopen = () => {
            console.log('WebSocket Client Connected');
            client.send(JSON.stringify({ message: "handshake" }));
        };
        client.onmessage = (message) => {
            if (message.data.includes("success")) {
                setState({ phase: 2 });
            } else if (message.data.includes("failure")) {
                setState({ phase: 3 });
            }
            console.log(message);
        };
    }

    const handleChange = (e) => {
        console.log();
        setState({
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(REACT_APP_NODE_LOCAL + '/create-employer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        })
        .then(data => data.json())
        .then(json=>setRes(json));

       
    };

    async function handleResult(result){
        if (result.error) {
            alert('Error while submitting employer certificate data: ' + result.error);
        } else if (result.url) {
            setChallenge(result.url);
            setState({ phase: 1 });
            setupWebhook(result.url);

        } else {
            alert('Something went wrong while submitting data, please try again later');
        }

        console.log('submission result in form=' + JSON.stringify(result.url));
    }


    if (state.phase == 0) {
        return (
            <div id="employer-form">
                <Form onSubmit={e => {handleSubmit(e)}} >
                    <p>{state.props}</p>
                    <Form.Group className="mb-3" controlId="formGivenName">
                        <Form.Label>Given Name</Form.Label>
                        <Form.Control type="text" name="givenName" value={state.givenName} onChange={e => {handleChange(e)}} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formFamilyName">
                        <Form.Label>Family Name</Form.Label>
                        <Form.Control type="text" name="familyName" value={state.familyName} onChange={e => {handleChange(e)}}/>

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formType">
                        <Form.Label>Employment Type</Form.Label>
                        <Form.Control type="text" name="employmentType" value={state.employmentType} onChange={e => {handleChange(e)}} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBaseSalary">
                        <Form.Label>Base Salary</Form.Label>
                        <Form.Control type="text" name="baseSalary" value={state.baseSalary} onChange={e => {handleChange(e)}} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formJobTitle">
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control type="text" name="jobTitle" value={state.jobTitle} onChange={e => {handleChange(e)}} />

                    </Form.Group>
                    <Button className="mb-3" variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
            </div>
        );
    } else if (state.phase == 1) {
        return (
            <div id="employer-form">
                <QRCode value={REACT_APP_QR_URL + "/employment/" + challenge} size={128} />
            </div>
        );
    } else if (state.phase == 2) {
        return (
            <div id="diplemployeroma-form">

                <span className="Title-TAGH2">The certificate was added succesfully</span>
                <Image src={sucess_img} fluid ></Image>
            </div>
        );
    } else if (state.phase == 3) {
        return (
            <div id="employer-form">
                Error while submitting the certificate
            </div>
        );
    } else {
        return (
            <div id="employer-form">Invalid form status: {state.phase}</div>
        );

    }

}
export default EmployerForm;