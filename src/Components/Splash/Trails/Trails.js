import React, { useState, useEffect } from 'react';

import TrailsDisplay from './TrailsDisplay/TrailsDisplay';

const style ={
    width: 'auto',
    height: 'auto',
    backgroundColor: 'red'
};

const Trails = (props) =>{
    const [trails, setTrails] = useState([])

    const TrailRows = () => {
        return trails.map( (trailInfo, index) => {
            return <TrailsDisplay key={index} data={trailInfo} />
        })
    };

    useEffect( () => {
        fetch('http://localhost:3000/trail/viewtrails', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(trails => setTrails(trails))
        .catch(err => console.log('This is my error:', err))
    }, [])

    return(
        <div className='main'>
            <div className='mainDiv' style={style}>
                <table>
                    <tbody>
                        <tr>
                            <th>Trail Name:</th>
                            <th>Park Name:</th>
                            <th>Address:</th>
                            <th>Difficulty</th>
                            <th>Length (in miles):</th>
                        </tr>
                        {TrailRows()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Trails;