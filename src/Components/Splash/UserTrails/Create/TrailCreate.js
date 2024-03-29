import React, { useState } from 'react';
import {Form, FormGroup, Label, Input } from 'reactstrap';

import './Create.css'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import APIURL from '../../../../helpers/environment';

const Create = (props) => {
    const classes = makeStyles;

    const [trailName, setTrailName] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`${APIURL}/usertrails/logtrail`, {
            method: 'POST',
            body: JSON.stringify({trailName: trailName, difficulty: difficulty, description: description, rating: rating}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then(data => data.json())
        .then( (json) => {
            console.log(json)
            setTrailName('')
            setDifficulty('')
            setDescription('')
            setRating('')
            props.getTrails()
        })
        .catch(err => console.log(err))
    }

    return(
        <div className='mainCreate'>
            <div className='mainCreateDiv'>
            <h1 style={{margin: '0px'}}>Add a trail to your log</h1>
            <span>How was your hike?</span>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='trailName'>Trail Name: </Label>
                    {/* <Input name='trailName' value={trailName} onChange={(e) => setTrailName(e.target.value)} required/> */}
                    <TextField
                        name='trailName'
                        id="standard-textarea"
                        onChange={ (e) => setTrailName(e.target.value)}
                        placeholder="Please Enter Trail Name"
                        value={trailName}
                        multiline
                        className={classes.textField}
                        margin="normal"
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='difficulty'>Difficulty: </Label>
                    <Input type='select' name='difficulty' className='selectDropdown' value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                        <option value={null}>(optional)</option>
                        <option value='Easy'>Easy</option>
                        <option value='Moderate'>Moderate</option>
                        <option value='Hard'>Hard</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='description'>Description: </Label>
                    <TextField
                        name='description'
                        id="standard-textarea"
                        onChange={ (e) => setDescription(e.target.value)}
                        placeholder="(Optional)"
                        value={description}
                        multiline
                        className={classes.textField}
                        margin="normal"
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='rating'>Rating: </Label>
                    <br />
                    <Input type='select' name='rating' className="selectDropdown" value={rating} onChange={ (e) => setRating(e.target.value)} required>
                        <option value={null}>Rate your experience!</option>
                        <option value='⭐'>⭐</option>
                        <option value='⭐⭐'>⭐⭐</option>
                        <option value='⭐⭐⭐'>⭐⭐⭐</option>
                        <option value='⭐⭐⭐⭐'>⭐⭐⭐⭐</option>
                        <option value='⭐⭐⭐⭐⭐'>⭐⭐⭐⭐⭐</option>
                    </Input>
                </FormGroup>
                <Button type='submit' variant='contained' color='primary'>Record your trail!</Button>
            </Form>
            </div>
        </div>
    )
}

export default Create;