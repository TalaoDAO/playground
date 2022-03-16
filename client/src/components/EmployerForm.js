import React from 'react';

import {
    Container, Form, Button, Image, Row, Col
} from 'react-bootstrap';

import QRCode from "react-qr-code";
import sucess_img from '../pages/img/success.png';

var W3CWebSocket = require('websocket').w3cwebsocket;

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL, REACT_APP_WEBSOCKET_SERVER } = process.env;





function EmployerForm(props) {

    let initGivenName='Jane';
    let initFamilynName='Doe';
    let initEmail=null;
    if(props && props.state){
        if( props.state.givenName){
            initGivenName=props.state.givenName;
        }
        if( props.state.familyName){
            initFamilynName=props.state.familyName;
        }
        if( props.state.email){
            initEmail=props.state.email;
        }
    }

    
    const [givenName, setGivenName] = React.useState(initGivenName);
    const [familyName, setFamilyName] = React.useState(initFamilynName);
    const [email, setEmail] = React.useState(initEmail);
    const [startDate, setStartDate] = React.useState('1991-12-10T12:02:55.268Z');
    const [jobTitle, setJobTitle] = React.useState('Engineer');
    const [baseSalary, setBaseSalary] = React.useState('65000 euros');
    const [employmentType, setEmploymentType] = React.useState('Open ended contract');
    const [phase, setPhase] = React.useState(0);
    const [res,_setRes] = React.useState(null);
    const [challenge,setChallenge] = React.useState(null);

    const setRes = (res) => {
        _setRes(res);
        handleResult(res);
    };

    console.log(props);

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
                setPhase(2);
            } else if (message.data.includes("failure")) {
                setPhase(3);
            }
            console.log(message);
        };
    }

    function getValues(){
        return {
            giveName:givenName,
            familyName:familyName,
            email:email,
            startDate:startDate,
            jobTitle:jobTitle,
            baseSalary:baseSalary,
            employmentType:employmentType

        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(REACT_APP_NODE_LOCAL + '/create-employer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(getValues())
        })
        .then(data => data.json())
        .then(json=>setRes(json));

       
    };

    async function handleResult(result){
        if (result.error) {
            alert('Error while submitting employer certificate data: ' + result.error);
        } else if (result.url) {
            setChallenge(result.url);
            setPhase(1);
            setupWebhook(result.url);

        } else {
            alert('Something went wrong while submitting data, please try again later');
        }

        console.log('submission result in form=' + JSON.stringify(result.url));
    }


    if (phase == 0) {
        return (
            <div id="employer-form">
                <Form onSubmit={e => {handleSubmit(e)}} >
                    <Form.Group className="mb-3" controlId="formGivenName">
                        <Form.Label>Given Name</Form.Label>
                        <Form.Control type="text" name="givenName" value={givenName} onChange={e => {setGivenName(e.target.value)}} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formFamilyName">
                        <Form.Label>Family Name</Form.Label>
                        <Form.Control type="text" name="familyName" value={familyName} onChange={e => {setFamilyName(e.target.value)}}/>

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formType">
                        <Form.Label>Employment Type</Form.Label>
                        <Form.Control type="text" name="employmentType" value={employmentType} onChange={e => {setEmploymentType(e.target.value)}} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBaseSalary">
                        <Form.Label>Base Salary</Form.Label>
                        <Form.Control type="text" name="baseSalary" value={baseSalary} onChange={e => {setBaseSalary(e.target.value)}} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formJobTitle">
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control type="text" name="jobTitle" value={jobTitle} onChange={e => {setJobTitle(e.target.value)}} />

                    </Form.Group>
                    <Button className="mb-3" variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
            </div>
        );
    } else if (phase == 1) {
        return (
            <div id="employer-form">
                <QRCode value={REACT_APP_QR_URL + "/employment/" + challenge} size={128} />
            </div>
        );
    } else if (phase == 2) {
        return (
            <div id="employer-form">

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
    } else if (phase == 3) {
        return (
            <div id="employer-form">
                Error while submitting the certificate
            </div>
        );
    } else {
        return (
            <div id="employer-form">Invalid form status: {phase}</div>
        );

    }

}
export default EmployerForm;