import React, { useState, useEffect } from 'react';

import TrailsDisplay from './TrailsDisplay/TrailsDisplay';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import APIURL from '../../../helpers/environment';

import './Trails.css'

const Trails = (props) =>{
    const classes = makeStyles;

    const [trails, setTrails] = useState([]);

    const TrailRows = () => {
        return trails.map( (trailInfo, index) => {
            return <TrailsDisplay key={index} data={trailInfo} token={props.token}/>
        })
    };

    useEffect( () => {
        fetch(`${APIURL}/trail/viewtrails`, {
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
        <div className='mainTrails'>
            <div className='mainTrailsDiv'>
            <Paper className={classes.root}>
                <Table stickyHeader className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align='center' id='MuiTableCell-head' style={{textDecoration: 'underline', fontSize: '28px', lineHeight: '1.5em'}}>Indy Trails</TableCell>
                        <TableCell align='center' id='MuiTableCell-head'>Trail Name:</TableCell>
                        <TableCell align="center" id='MuiTableCell-head'>Park:</TableCell>
                        <TableCell align="center" id='MuiTableCell-head'>Address:</TableCell>
                        <TableCell align="center" id='MuiTableCell-head'>Difficulty:</TableCell>
                        <TableCell algin='center' id='MuiTableCell-head'>Length (in miles):</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {TrailRows()}
                    </TableBody>
                </Table>
            </Paper>
            </div>
        </div>
    )
}

export default Trails;