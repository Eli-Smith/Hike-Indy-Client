import React, {useState} from 'react';

import Login from './Login/Login';
import Signup from './Signup/Signup';

import './Auth.css'


const Auth = (props) => {
    const [login, setLogin] = useState(false)

    const authToggle = () => {
        setLogin(!login)
    }

    return(
        <div className='mainAuth'>
            <div className='mainAuthDiv'>
                <h1 style={{marginBottom: '0.5em'}}>Welcome to Hike Indy!</h1>
                <h3 style={{marginTop: '0px', marginRight: '1em', marginLeft: '1em'}}>Keep track of trails you've visited, rate your explored trails 
                    <br/>
                    or find your next hike from over 200 Indiana hiking trails!</h3>
                <div className='formDiv'>
                    { login ? <Login setSession={props.setSession} authToggle={authToggle} /> : <Signup setSession={props.setSession} authToggle={authToggle} setLogin={setLogin}/>}
                {/* <Login setSession={props.setSession}/>
                
                <br/>
                
            <Signup setSession={props.setSession}/> */}
                </div>
                {/* <button onClick={authToggle}>Already have an account? Click here to sign in!</button> */}
            </div>
        </div>
    )
}

export default Auth