import React from 'react';

import UserTrails from './UserTrails/UserTrails';
import ToVisit from './ToVisit/ToVisit';
import Trails from './Trails/Trails';

const style ={
    width: '100vw',
    height: '600px',
    backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'row'
}

const Splash = (props) => {

    return(
        <div className='main'>
            <div className='mainDiv' style={style}>
                <h1>This will be our Splash Page!</h1>
                <UserTrails token={props.token} />
                <ToVisit token={props.token}/>
                <Trails token={props.token}/>
            </div>
        </div>
    )
}

export default Splash;