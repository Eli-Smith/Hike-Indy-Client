import React, { useState } from 'react';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import './Signup.css'
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

const Signup = (props) => {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let userObj ={
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }

    const handleSignup = (e) =>{
        e.preventDefault();

        fetch('http://localhost:3000/user/create', {
            method: 'POST',
            body: JSON.stringify(userObj),
            headers: new Headers ({
                "Content-Type": 'application/json'
            })
        })
        .then(data => data.json())
        .then(json => props.setSession(json.sessionToken))
        .catch(err => console.log(err));
    }

    return(
        <div className='mainSignup'>
            <span>Create an Account:</span>
                <Form onSubmit={handleSignup}>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label htmlFor='firstName'>First Name:</Label>
                                <Input type='text' name='firstName' placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} required></Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label htmlFor='lastName'>Last Name</Label>
                                <Input type='text' name='lastName' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} required></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label htmlFor='email'>Email:</Label>
                            <Input type='email' name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required></Input>
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label htmlFor='password'>Password:</Label>
                            <Input type='password' name='password' placeholder='Password' pattern="[A-Z,a-z]{6,}" title='Password must be at least 6 characters' onChange={(e) => setPassword(e.target.value)} required></Input>
                        </FormGroup>
                    </Row>
                    <Button variant='contained' type='submit'>Create Account</Button>
                </Form>
        </div>
    )
}

export default Signup