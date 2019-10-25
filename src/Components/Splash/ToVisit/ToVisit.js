import React from 'react';

import ToVisitDisplay from './ToVisitDisplay/ToVisitDisplay';

const style ={
    width: 'auto',
    height: '400px',
    backgroundColor: 'blue'
};

const ToVisit = (props) =>{

    return(
        <div className='main'>
            <div className='mainDiv' style={style}>
                <h1>This will display our To Visit List</h1>
                <ToVisitDisplay />
            </div>
        </div>
    )
}

export default ToVisit;