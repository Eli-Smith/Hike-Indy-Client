import React from 'react';

import Login from './Login/Login';
import Signup from './Signup/Signup';

import './Auth.css'


const Auth = (props) => {

    return(
        <div className='mainAuth'>
            <div className='mainAuthDiv'>
                <h1 style={{margin: '0px'}}>Welcome to Hike Indy!</h1>
                <h4 style={{marginTop: '0px', marginRight: '1em', marginLeft: '1em'}}>Keep track of trails you've visited, rate your explored trails 
                    <br/>
                    or find your next hike from over 200 Indiana hiking trails!</h4>
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