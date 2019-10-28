import React, { useEffect, useState } from 'react';

import UserTrailsDisplay from './UserTrailsDisplay/UserTrailsDisplay';
import TrailCreate from './Create/TrailCreate';
import Update from './Update/Update';


const style ={
    width: 'auto',
    height: 'auto',
    backgroundColor: 'gray'
};

const UserTrails = (props) =>{
    const [userTrails, setUserTrails] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [TrailToUpdate, setTrailToUpdate] = useState({});

    const userRows = () => {
        return userTrails.map( (userInfo, index) => {
            return <UserTrailsDisplay editTrailUpdate={editTrailUpdate} key={index} data={userInfo} getTrails={getTrails}
            updateOn={updateOn} token={props.token} />
        })
    }
    
    // THIS METHOD WILL FETCH ALL TRAIL LOGS BELONGING TO CURRENT USER //
    const getTrails = () => {
        fetch('http://localhost:3000/usertrails/viewall', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(data => data.json())
        .then(json => setUserTrails(json))
        .catch(err => console.log(err)) 
    };

    const editTrailUpdate = (trail) => {
        setTrailToUpdate(trail);
        console.log(trail);
    };

    const updateOn = () => {
        setUpdateActive(true);
    };

    const updateOff = () => {
        setUpdateActive(false);
    }

    

    // RUNS ON PAGE RENDER TO DISPLAY USER LOGS //
    useEffect( () => {
        getTrails()
    }, [])


    return(
        <div className='main'>
            <div className='mainDiv' style={style}>
            <TrailCreate token={props.token} getTrails={getTrails}/>
            <table>
                    <tbody>
                    <tr>
                        <th>Trail Name:</th>
                        <th>Difficulty:</th>
                        <th>Description:</th>
                        <th>Rating:</th>
                    </tr>
                        {userRows()}
                    </tbody>
            </table>
                    
                    {updateActive ? <Update TrailToUpdate={TrailToUpdate}
                    updateOff={updateOff} token={props.token} getTrails={getTrails}/> : <></>}
            </div>
        </div>
    )
}

export default UserTrails;