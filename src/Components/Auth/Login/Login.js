import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Login.css';

const Login = (props) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let userObj = {
        email: email,
        password: password
    };

    const handleLogin = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            body: JSON.stringify({user: userObj}),
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        })
        .then(data => data.json())
        .then(json => props.setSession(json.sessionToken))
        .catch(err => console.log(err))
    }

    return(
        <div className='mainLogin'>
            <span>Log In:</span>
            <Form onSubmit={handleLogin}>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor='email'>Email:</Label>
                            <br/>
                            <Input type='email' name='email' id='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} required></Input>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor='password'>Password:</Label>
                            <Input type='password' name='password' id='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} required></Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Button type='submit'>Log In</Button>
            </Form>
        </div>
    );
};

export default Login;