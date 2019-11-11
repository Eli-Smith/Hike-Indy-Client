import React, {useState, useEffect} from 'react';

import ToVisitDisplay from './ToVisitDisplay/ToVisitDisplay';

import {Form, FormGroup, Label, Input } from 'reactstrap';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import APIURL from '../../../helpers/environment';

const ToVisit = (props) =>{
    const classes = makeStyles;

    const [listItems, setListItems] = useState([])
    const [listTrail, setListTrail] = useState('');
    const [listAdd, setListAdd] = useState('');

    const listRows = () => {
        return listItems.map( (trail, index) => {
            return <ToVisitDisplay listItems={trail} key={index} getList={getList} token={props.token}/>
        })
    };

    const getList = () => {

        fetch(`${APIURL}/visit/viewlist`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    })
    .then(res => res.json())
    .then(trail => setListItems(trail))
    .catch(err => console.log('This is my error:', err))
    };

    const addToList = (e) => {
        e.preventDefault();

        fetch(`${APIURL}/visit/add`, {
            method: 'POST',
            body: JSON.stringify({trailName: listTrail, address: listAdd}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then( () => {
            setListTrail('')
            setListAdd('')
            getList()
        })
        .catch(err => console.log(err));
    };


    useEffect( () => {

        fetch(`${APIURL}/visit/viewlist`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(res => res.json())
        .then(trail => setListItems(trail))
        .catch(err => console.log('This is my error:', err))
    });


    return(
        <div className='mainToVisit'>
            <div className='mainToVisitDiv' style={{marginRight: '3em'}}>
                
            <Paper className={classes.root} style={{padding: '1em'}}>  
            <h1 style={{margin: '0px'}}>Future Hikes</h1>
            <span>Add a trail to your list to visit later!</span>
            <Form onSubmit={addToList}>
                <FormGroup>
                    <Label htmlFor='trailName'>Trail Name: </Label>
                    <Input name='trailName' value={listTrail} onChange={(e) => setListTrail(e.target.value)} required/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='address'>Address: </Label>
                    <Input name='address' value={listAdd} onChange={ (e) => setListAdd(e.target.value)}/>
                </FormGroup>
                <Button type='submit' variant='contained' color='primary'>Add it to your list!</Button>
            </Form>

            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align='left' id='MuiTableCell-head'>Trail Name: </TableCell>
                    <TableCell align="left" id='MuiTableCell-head'>Address: </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {listRows()}
                </TableBody>
            </Table>
            </Paper>
            </div>
        </div>
    )
}

export default ToVisit;