import React, { useState } from 'react';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import './Login.css';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  Button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

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
                <Row>
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
                <Button variant='contained' type='submit'>Log In</Button>
            </Form>
        </div>
    );
};

export default Login;