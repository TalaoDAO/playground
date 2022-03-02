import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Form, Button, Row, Col
} from 'react-bootstrap';

const { REACT_APP_NODE_LOCAL, REACT_APP_QR_URL } = process.env;

async function loginUser(credentials) {
  return fetch(REACT_APP_NODE_LOCAL + '/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={{span:10, offset:1}} md={{span:6, offset:3}}>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={e => setUsername(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Col>
      </Row>
     
    
    </Container>
    
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}


