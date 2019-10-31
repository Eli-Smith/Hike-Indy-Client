import React from 'react';

import Login from './Login/Login';
import Signup from './Signup/Signup';

import './Auth.css'


const Auth = (props) => {

    return(
        <div className='mainAuth'>
            <div className='mainAuthDiv'>
                <h1>Welcome to Hike Indy!</h1>
                <div className='formDiv'>
                <Login setSession={props.setSession}/>
                
                <br/>

                <Signup setSession={props.setSession}/>
                </div>
            </div>
        </div>
    )
}

export default Auth