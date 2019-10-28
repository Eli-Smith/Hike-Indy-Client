import React from 'react';

const ToVisitDisplay = (props) => {

    const removeFromList = () => {
        fetch(`http://localhost:3000/visit/remove/${props.listItems.id}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(item => console.log(item))
        .then( () => props.getList())
        .catch(err => console.log(err))
    }

    return(
        <>
            <tr>
                <td>{props.listItems.trailName}</td>
                <td>{props.listItems.address}</td>
                <td>
                <button onClick={removeFromList}>Remove</button>
                </td>
            </tr>
        </>
    )
}

export default ToVisitDisplay;