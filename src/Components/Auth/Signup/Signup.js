import React, { useState } from 'react'; // Importing React and useState
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap'; // Importing several styled components from the reactstrap library

import './Signup.css' // Linking our css file

import { makeStyles } from '@material-ui/core/styles'; // (lines 6 and 7) Importing mui components
import Button from '@material-ui/core/Button';

import APIURL from '../../../helpers/environment';

const useStyles = makeStyles(theme => ({ // Creating a variable to store our mui styled elements
  Button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const Signup = (props) => {  // Declaring our Signup component and setting it to accept props
    
    const [firstName, setFirstName] = useState(''); // (Lines 20 - 23) Establishing the useState of our component to create new users
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let userObj ={ // Declaring a new variable to store a new User Object
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }

    const handleSignup = (e) =>{ // Declaring a function to handle our form submit and allowing it to take in an event as an argument
        e.preventDefault(); // Preventing the default behaviour of our event

        fetch(`${APIURL}/user/create`, { // Making a fetch request to our db
            method: 'POST', // Using the 'POST' method allowing us to store information in our db
            body: JSON.stringify(userObj), // JSONifying our userObj
            headers: new Headers ({ // Establishing the headers in our request
                "Content-Type": 'application/json'
            })
        })
        .then(data => data.json()) // JSONify the data returned from our fetch
        .then(json => props.setSession(json.sessionToken)) // Using our setSession callback function from our props and establish a new session
        .catch(err => console.log(err)); // Catching any errors we may encounter
    }

    return(
        <div className='mainSignup'> {/*Using JSX to create the layout of our Signup component*/}
            <span style={{position: 'relative'}}>Create an Account:</span>
            <br/>
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

export default Signup // Exporting the React component for use in the rest of our app