import React from 'react';

import UserTrails from './UserTrails/UserTrails';
import Trails from './Trails/Trails';

import './Splash.css'


const Splash = (props) => {

    return(
        <div className='mainSplash'>
            <div className='mainSplashDiv'>
                <UserTrails token={props.token} />
                <Trails token={props.token}/>
            </div>
        </div>
    )
}

export default Splash;