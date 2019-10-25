import React, { useState } from 'react';
import { FormGroup } from 'reactstrap'

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
        <>
            <span>Create an Account:</span>
                <form onSubmit={handleSignup}>
                    <FormGroup>
                        <label htmlFor='firstName'>First Name:</label>
                        <input type='text' name='firstName' placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} required></input>
                        <br/>
                        <label htmlFor='lastName'>Last Name</label>
                        <input type='text' name='lastName' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} required></input>
                        <br/>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required></input>
                        <br/>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' name='password' placeholder='Password' pattern="[A-Z,a-z]{6,}" title='Password must be at least 6 characters' onChange={(e) => setPassword(e.target.value)} required></input>
                    </FormGroup>
                    <button type='submit'>Create Account</button>
                </form>
        </>
    )
}

export default Signup