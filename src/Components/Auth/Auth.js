import React, { useState } from 'react';

import Login from './Login/Login';
import Signup from './Signup/Signup';


const Auth = (props) => {

    return(
        <div className='main'>
            <div className='mainDiv'>
                <Login setSession={props.setSession}/>
                
                <br/>

                <Signup setSession={props.setSession}/>

            </div>
        </div>
    )
}

export default Auth