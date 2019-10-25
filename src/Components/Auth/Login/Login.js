import React, { useState } from 'react';
import {FormGroup} from 'reactstrap'

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
        <>
        <span>Log In:</span>
        <form onSubmit={handleLogin}>
        <FormGroup>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} required></input>
            <br/>
            <label htmlFor='password'>Password:</label>
            <input type='password' name='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} required></input>
        </FormGroup>
        <button type='submit'>Log In</button>
        </form>
        </>
    );
};

export default Login;