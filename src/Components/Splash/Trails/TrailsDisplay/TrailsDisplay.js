import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import APIURL from '../../../../helpers/environment';

const TrailsDisplay = (props) =>{


    const addToList = (e) => {
        console.log(props.data)

        e.preventDefault();

        fetch(`${APIURL}/visit/add`, {
            method: 'POST',
            body: JSON.stringify({trailName: props.data.trailName, address: props.data.address}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then( () => console.log('Added to List'))
        .catch(err => console.log(err));     
    };
   
    return(
        <TableRow key={props.key}>
        <TableCell align='center'></TableCell>
        <TableCell align='center'>{props.data.trailName}</TableCell>
        <TableCell align='center'>{props.data.park}</TableCell>
        <TableCell align='center'>{props.data.address}</TableCell>
        <TableCell align='center'>{props.data.difficulty}</TableCell>
        <TableCell align='center'>{props.data.length}</TableCell>
        <TableCell align='left'>
            <Button variant='contained' color='primary' onClick={addToList}>Add to Visit List!</Button>
        </TableCell>
    </TableRow>
    )
}

export default TrailsDisplay;