import React, { useState } from 'react'; // Importing React and useState to create a new react component
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap'; // Importing components from the ReactStrap Library
import './Login.css'; // Linking our css file

import { makeStyles } from '@material-ui/core/styles'; // (Lines 5 and 6) Importing material UI components from our material UI dependency
import Button from '@material-ui/core/Button';

import APIURL from '../../../helpers/environment';
import { runInNewContext } from 'vm';


const useStyles = makeStyles(theme => ({ // Grabbing the pre set style for our mui components
  Button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const Login = (props) =>{ // Declaring our Login component
    const [email, setEmail] = useState(''); // (Lines 18 and 19) Declaring the useState of our component to take in the email and password from our login fields
    const [password, setPassword] = useState('');

    let userObj = { // Declaring a variable and setting it to the value of our email and password fields creating a user object
        email: email,
        password: password
    };

    const handleLogin = (e) => { // Delcaring a function and setting it to take in an event as an argument
        e.preventDefault(); // Preventing the default functions of any event our function takes in

        fetch(`${APIURL}/user/login`, { // Making a fetch request to our server
            method: 'POST', // The fetch method is 'POST' allowing us to store information in our db
            body: JSON.stringify({user: userObj}), // JSONifying the body of our request, in this case our userObj variable
            headers: new Headers ({ // Setting the headers of our request to match what we have established in our back end
                'Content-Type': 'application/json'
            })
        })
        .then(data => data.json()) // Jsonify the data from our fetch
        .then(json => props.setSession(json.sessionToken)) // Setting the session token handed to us as a prop from our App.js
        .catch(err => console.log(`This is my error: ${err}`)) // Cathing any errors we may encounter
    }

    return(
        <div className='mainLogin'> {/*Using JSX to create the layout of our Log in Component*/}
            <div className='mainLoginDiv'>
            <span style={{position: 'relative', fontSize: '20px'}}>Log In:</span>
            <br />
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
                                <br/>
                                <Input type='password' name='password' id='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} required></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button variant='contained' type='submit'>Log In</Button>
                    <Button style={{margin: '1em', backgroundColor: '#51C98D'}}variant='contained' onClick={props.authToggle}>Click here to create an account!</Button>
                </Form>
            </div>
        </div>
    );
};

export default Login; // Exporting the React componenet for use in the rest of our app