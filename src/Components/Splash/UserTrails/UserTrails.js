import React, { useEffect, useState } from 'react';

import UserTrailsDisplay from './UserTrailsDisplay/UserTrailsDisplay';
import TrailCreate from './Create/TrailCreate';
import Update from './Update/Update';
import ToVisit from '../ToVisit/ToVisit';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './UserTrails.css'

import APIURL from '../../../helpers/environment';

const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
    boldHeaders: {
        fontWeight: 'bold',
        fontSize: '20px',
    },
  });


const UserTrails = (props) =>{
    const classes = makeStyles;

    const [userTrails, setUserTrails] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [trailToUpdate, setTrailToUpdate] = useState({});

    const userRows = () => {
        return userTrails.map( (userInfo, index) => {
            return <UserTrailsDisplay editTrailUpdate={editTrailUpdate} key={index} data={userInfo} getTrails={getTrails}
            updateOn={updateOn} token={props.token} />
        })
    }
    
    // THIS METHOD WILL FETCH ALL TRAIL LOGS BELONGING TO CURRENT USER //
    const getTrails = () => {
        fetch(`${APIURL}/usertrails/viewall`, {
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
        <div className='mainUserTrails'>
            <div className='mainUserTrailsDiv'>

            <ToVisit token={props.token}/>
            
            <TrailCreate token={props.token} getTrails={getTrails}/> 

            <Paper className={classes.root}>
            <h1 style={{margin: '0px'}}>My Trail Log</h1>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align='left' id='MuiTableCell-head'>Trail Name:</TableCell>
                    <TableCell align="left" id='MuiTableCell-head'>Difficulty:</TableCell>
                    <TableCell align="left" id='MuiTableCell-head'>Description:</TableCell>
                    <TableCell align="left" id='MuiTableCell-head'>Rating:</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {userRows()}
                </TableBody>
            </Table>
            </Paper>

                {updateActive ? <Update trailToUpdate={trailToUpdate}
                updateOff={updateOff} token={props.token} getTrails={getTrails}/> : <></>}
            </div>
        </div>
    )
}

export default UserTrails;