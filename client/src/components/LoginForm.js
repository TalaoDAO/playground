import React from 'react';

import {
    Container, Form, Button, Image
} from 'react-bootstrap';

import QRCode from "react-qr-code";
import sucess_img from '../assets/images/v1/pages/success.png';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { Navigate } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

var W3CWebSocket = require('websocket').w3cwebsocket;

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL, REACT_APP_WEBSOCKET_SERVER,REACT_APP_WALLET_LINK } = process.env;


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


function LoginForm(props) {
    const [givenName, setGivenName] = React.useState(props.givenName);
    const [familyName, setFamilyName] = React.useState(props.familyName);
    const [email, setEmail] = React.useState(props.email);
    const [inError, setInError] = React.useState(0);
    const [loginChallenge, _setLoginChallenge] = React.useState(null);
    const [next, setNext] = React.useState(props.next);
    const [res,_setRes] = React.useState(null);

    let navigate = useNavigate();

    const setRes = (res) => {
        _setRes(res);
        handleResult(res);
    };

    const setLoginChallenge = (url) => {
        _setLoginChallenge(url);
        //setup webhook
        const [uuid, params] = url?.split("?");

        let client = new W3CWebSocket(REACT_APP_WEBSOCKET_SERVER + "?challenge=" + uuid);
        client.onopen = () => {
            client.send(JSON.stringify({ message: "handshake" }));
        };
        client.onmessage = (message) => {
            if (message.data.includes("success")) {
                let info = JSON.parse(message.data);
                navigate(next,{replact:true, state:{
                    email: info.email,
                    familyName: info.familyName,
                    givenName: info.givenName
                }})
                

            } else if (message.data.includes("failure")) {
                setInError(1);
            };
        };

    }

    async function handleResult(result){
        if (result.error) {
            alert('Error while issuing login challenge: ' + result.error);
        } else if (result.url) {
            await setLoginChallenge(result.url);
    
        } else {
            alert('Something went wrong while submitting data, please try again later');
            return;
        };

        
    }


    //handle login challenge
    //const res =issueLoginChallenge();

    React.useEffect(() => {
        fetch(REACT_APP_NODE_LOCAL + '/create-authentication', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        })
        .then((result)=>result.json())
        .then((res)=>setRes(res));
    }, []);



    

    

    if (inError === 0) {
        if (email == null) {
            if (loginChallenge == null) {
                return (
                    <div id="login-form">
                        <span className='subtitle-dark '>Loading...</span>
                        <p>{!res ? "Please wait..." : JSON.stringify(res)}</p>
                    </div>
                );
            } else {
                return (
                    <div id="login-form">
                        <div className="lg-only">
                            <QRCode value={REACT_APP_QR_URL + "/authentication/" + loginChallenge} size={128} />
                        </div>
                        <div className="sm-only">
                            <Button className="btn-dark-submit " variant="primary"  href={REACT_APP_WALLET_LINK + encodeURIComponent(REACT_APP_QR_URL + "/authentication/" + loginChallenge)}>Click to login with wallet</Button>
                        </div>
                    </div>
                );
            }
        } else {
            return (
                    <Navigate replace to={{
                    pathname: next,
                    state: {
                        email: email,
                        familyName: familyName,
                        givenName: givenName

                    }} } test="hello world"/>
            );
        }
    }else{
        return (
            <div id="login-form">
                Login unsuccessul
            </div>
        );
    }
}

export default LoginForm;
