import React from 'react';

import Login from './Login/Login';
import Signup from './Signup/Signup';

import './Auth.css'


const Auth = (props) => {

    return(
        <div className='mainAuth'>
            <div className='mainAuthDiv'>
                <Login setSession={props.setSession}/>
                
                <br/>

                <Signup setSession={props.setSession}/>

            </div>
        </div>
    )
}

export default Auth