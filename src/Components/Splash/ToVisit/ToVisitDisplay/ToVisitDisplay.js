import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import APIURL from '../../../helpers/environment';

const useStyles = makeStyles(theme => ({
  Button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const ToVisitDisplay = (props) => {

    const removeFromList = () => {
        fetch(`${APIURL}/visit/remove/${props.listItems.id}`, {
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
                <Button variant='contained' style={{backgroundColor: '#DD4E37'}} onClick={removeFromList}>Remove</Button>
                </TableCell>
            </TableRow>
        </>
    )
}

export default ToVisitDisplay;