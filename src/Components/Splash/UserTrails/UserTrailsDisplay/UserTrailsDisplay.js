import React from 'react';

const UserTrailsDisplay = (props) =>{

        // METHOD FOR DELETING LOGS //
        const deleteTrail = (data) => {
            fetch(`http://localhost:3000/usertrails/delete/${props.data.id}`, {
                method: 'DELETE',
                headers: new Headers ({
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                })
            })
            .then(console.log('Log Deleted'))
            .then(props.getTrails())
            .catch(err => console.log(err));
        };

    return(
       <>
        <tr key={props.key}>
            <td>{props.data.trailName}</td>
            <td>{props.data.difficulty}</td>
            <td>{props.data.description}</td>
            <td>{props.data.rating}</td>
            <td>
                <button>Update Trail</button>
                <button onClick={deleteTrail}>Delete Trail</button>
            </td>
        </tr>
       </>
    )
}

export default UserTrailsDisplay;