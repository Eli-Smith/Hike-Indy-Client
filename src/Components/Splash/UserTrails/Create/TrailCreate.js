import React, { useState } from 'react';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Create = (props) => {
    const [trailName, setTrailName] = useState('')
    const [difficulty, setDifficulty] = useState('Easy')
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
        <>
            <h3>Log your trail!</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='trailName'/>
                    <Input name='trailName' value={trailName} onChange={(e) => setTrailName(e.target.value)} required/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='difficulty'/>
                    <Input type='select' name='difficulty' value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                        <option value='Easy'>Easy</option>
                        <option value='Moderate'>Moderate</option>
                        <option value='Hard'>Hard</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='description'/>
                    <Input name='description' value={description} onChange={(e) => setDescription(e.target.value)} required/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='rating'/>
                    <Input type='select' name='rating' value={rating} onChange={ (e) => setRating(e.target.value)} required>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </Input>
                </FormGroup>
                <Button type='submit'>Click to record your trail!</Button>
            </Form>
        </>
    )
}

export default Create;