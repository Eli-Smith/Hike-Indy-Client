import React, { useEffect, useState } from 'react';

import UserTrailsDisplay from './UserTrailsDisplay/UserTrailsDisplay';
import TrailCreate from './Create/TrailCreate';


const style ={
    width: 'auto',
    height: 'auto',
    backgroundColor: 'gray'
};

const UserTrails = (props) =>{
    const [userTrails, setUserTrails] = useState([]);

    const userRows = () => {
        // console.log(props.token)

        const userColumns = {
            trailName: 'Trail Name',
            difficulty: 'Difficulty',
            description: 'Description',
            rating: 'Rating'
        }

        return [<UserTrailsDisplay key={'Column Names'} data={userColumns} />].concat(
            userTrails.map((userInfo, index) => {
                return <UserTrailsDisplay key={index} data={userInfo} getTrails={getTrails}/>
            })
        )
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
                        {userRows()}
                    </tbody>
            </table>
            </div>
        </div>
    )
}

export default UserTrails;