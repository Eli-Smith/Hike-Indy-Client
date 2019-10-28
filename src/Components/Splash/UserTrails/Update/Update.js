import React, { useState } from 'react';
import {Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'

const Update = (props) => {
    const [editTrailName, setEditTrailName] = useState(props.TrailToUpdate.trailName)
    const [editDiff, setEditDiff] = useState(props.TrailToUpdate.difficulty)
    const [editDesc, setEditDesc] = useState(props.TrailToUpdate.description)
    const [editRating, setEditRating] = useState(props.TrailToUpdate.rating)

    const trailUpdate = (event, trail) => {
        event.preventDefault();
        fetch(`http://localhost:3000/usertrails/update/${props.TrailToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({trailName: editTrailName, difficulty: editDiff, description: editDesc, rating: editRating}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then( (res) => {
            props.getTrails();
            props.updateOff();
        })
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader>Update Your Trail</ModalHeader>
            <ModalBody>
                <Form onSubmit={trailUpdate}>
                    <FormGroup>
                        <Label htmlFor='trailName'>Edit Trail Name:</Label>
                        <Input name='trailName' value={editTrailName} onChange={(e) => setEditTrailName(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='difficulty'>Edit Difficulty:</Label>
                        <Input name='difficulty' type='select' value={editDiff} onChange={(e) => setEditDiff(e.target.value)}>
                            <option value='Easy'>Easy</option>
                            <option value="Moderate">Moderate</option>
                            <option value="Hard">Hard</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='description'>Edit Description:</Label>
                        <Input name='description' value={editDesc} onChange={(e) => setEditDesc(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='rating'>Edit Rating:</Label>
                        <Input type='select' name='rating' value={editRating} onChange={(e) => setEditRating(e.target.value)}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </Input>
                    </FormGroup>
                    <Button type='submit'>Click to Update!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default Update;