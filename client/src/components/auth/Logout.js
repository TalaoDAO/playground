import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button
} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function Logout({ setToken }) {
    let navigate = useNavigate();

    const handleLogout = async e => {
        e.preventDefault();
        setToken(null);
        navigate("/", { replace: true });
    }
    return (
        <Button type='button' className="btn btn-light btn-outline-dark" onClick={handleLogout}>Logout</Button>


    );
}



