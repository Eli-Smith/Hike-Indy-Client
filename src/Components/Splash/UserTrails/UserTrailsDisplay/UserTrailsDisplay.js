import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import APIURL from '../../../../helpers/environment';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));



const UserTrailsDisplay = (props) => {

        // METHOD FOR DELETING LOGS //
        const deleteTrail = () => {
            fetch(`${APIURL}/usertrails/delete/${props.data.id}`, {
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
                <Button variant='contained' style={{backgroundColor: '#DDB537'}} onClick={ () => {props.editTrailUpdate(props.data); props.updateOn()}}>Edit</Button>
                <Button variant='contained' style={{backgroundColor: '#DD4E37'}} onClick={deleteTrail}>Delete</Button>
            </TableCell>
        </TableRow>
       </>
    )
}

export default UserTrailsDisplay;