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

        const trailColumns = {
            trailName: 'Name of Trail',
            park: 'Park',
            address: 'Address',
            difficulty: 'Difficulty',
            length: 'Length of Trail (in miles)'
        }
        return [<TrailsDisplay key={'column names'} data={trailColumns}/>].concat(
            trails.map((trailInfo, index) => {
                return <TrailsDisplay key={index} data={trailInfo} />
            })
        )
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
                        {TrailRows()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Trails;