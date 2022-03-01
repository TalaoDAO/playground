import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button
} from 'react-bootstrap';

export default function Logout({ setToken }) {

    const handleLogout = async e => {
        e.preventDefault();
        setToken(null);

    }
    return (
        <Button type='button' className="btn btn-light btn-outline-dark" onClick={handleLogout}>Logout</Button>


    );
}



