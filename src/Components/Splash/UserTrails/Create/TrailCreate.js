import React, { useState } from 'react';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import './Create.css'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Create = (props) => {
    const classes = makeStyles;

    const [trailName, setTrailName] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/usertrails/logtrail', {
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
            <h1 style={{margin: '0px'}}>Log your trail!</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='trailName'>Trail Name: </Label>
                    <Input name='trailName' value={trailName} onChange={(e) => setTrailName(e.target.value)} required/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='difficulty'>Difficulty: </Label>
                    <Input type='select' name='difficulty' value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
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
                        placeholder="Description"
                        value={description}
                        multiline
                        className={classes.textField}
                        margin="normal"
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='rating'>Rating: </Label>
                    <Input type='select' name='rating' value={rating} onChange={ (e) => setRating(e.target.value)} required>
                        <option value={null}>Please rate your experience!</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </Input>
                </FormGroup>
                <Button type='submit'>Click to record your trail!</Button>
            </Form>
            </div>
        </div>
    )
}

export default Create;