import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {Button} from 'reactstrap'

const UserTrailsDisplay = (props) => {

        // METHOD FOR DELETING LOGS //
        const deleteTrail = () => {
            fetch(`http://localhost:3000/usertrails/delete/${props.data.id}`, {
                method: 'DELETE',
                headers: new Headers ({
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                })
            })
            .then(console.log('Log Deleted'))
            .then( () => props.getTrails())
            .catch(err => console.log(err));
        };

    return(
       <>
        <TableRow key={props.key}>
            <TableCell align='left'>{props.data.trailName}</TableCell>
            <TableCell align='left'>{props.data.difficulty}</TableCell>
            <TableCell align='left'>{props.data.description}</TableCell>
            <TableCell align='left'>{props.data.rating}</TableCell>
            <TableCell align='left'>
                <Button onClick={ () => {props.editTrailUpdate(props.data); props.updateOn()}}>Update Trail</Button>
                <Button onClick={deleteTrail}>Delete Trail</Button>
            </TableCell>
        </TableRow>
       </>
    )
}

export default UserTrailsDisplay;