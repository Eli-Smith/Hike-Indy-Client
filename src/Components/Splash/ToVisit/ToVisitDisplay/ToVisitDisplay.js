import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

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
            <TableRow>
                <TableCell>{props.listItems.trailName}</TableCell>
                <TableCell>{props.listItems.address}</TableCell>
                <TableCell>
                <button onClick={removeFromList}>Remove</button>
                </TableCell>
            </TableRow>
        </>
    )
}

export default ToVisitDisplay;