import React, { useState } from 'react';
import {Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'

import './Update.css'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import APIURL from '../../../../helpers/environment';

const Update = (props) => {

    const [editTrailName, setEditTrailName] = useState(props.trailToUpdate.trailName)
    const [editDiff, setEditDiff] = useState(props.trailToUpdate.difficulty)
    const [editDesc, setEditDesc] = useState(props.trailToUpdate.description)
    const [editRating, setEditRating] = useState(props.trailToUpdate.rating)

    const trailUpdate = (event, trail) => {
        event.preventDefault();
        fetch(`${APIURL}/usertrails/update/${props.trailToUpdate.id}`, {
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
        <div>
            <Modal isOpen={true}>
                <ModalHeader>Update Your Trail</ModalHeader>
                <ModalBody>
                    <Form onSubmit={trailUpdate}>
                        <FormGroup>
                            <Label htmlFor='trailName'>Edit Trail Name: </Label>
                            <Input name='trailName' value={editTrailName} onChange={(e) => setEditTrailName(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='difficulty'>Edit Difficulty: </Label>
                            <Input className='selectDropdown' name='difficulty' type='select' value={editDiff} onChange={(e) => setEditDiff(e.target.value)}>
                                <option value='Easy'>Easy</option>
                                <option value="Moderate">Moderate</option>
                                <option value="Hard">Hard</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='description'>Edit Description: </Label>
                            <Input name='description' value={editDesc} onChange={(e) => setEditDesc(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='rating'>Edit Rating: </Label>
                            <Input className='selectDropdown' type='select' name='rating' value={editRating} onChange={(e) => setEditRating(e.target.value)}>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </Input>
                        </FormGroup>
                        <Button variant='contained' color='primary' type='submit'>Click to Update!</Button>
                        <Button variant='contained' style={{backgroundColor: '#DD4E37'}} onClick={props.updateOff}>Cancel</Button>
                    </Form>
                </ModalBody>
            </Modal>
            </div>
    )
}

export default Update;