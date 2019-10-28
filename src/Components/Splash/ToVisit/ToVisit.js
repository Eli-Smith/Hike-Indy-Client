import React, {useState, useEffect} from 'react';

import ToVisitDisplay from './ToVisitDisplay/ToVisitDisplay';

const style ={
    width: 'auto',
    height: 'auto',
    backgroundColor: 'blue'
};

const ToVisit = (props) =>{
    const [listItems, setListItems] = useState([])
    const [listTrail, setListTrail] = useState('');
    const [listAdd, setListAdd] = useState('');

    const listRows = () => {
        return listItems.map( (trail, index) => {
            return <ToVisitDisplay listItems={trail} key={index} getList={getList}/>
        })
    };

    const getList = () => {

        fetch('http://localhost:3000/visit/viewlist', {
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

        fetch('http://localhost:3000/visit/add', {
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

        fetch('http://localhost:3000/visit/viewlist', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(res => res.json())
        .then(trail => setListItems(trail))
        .catch(err => console.log('This is my error:', err))
    }, []);


    return(
        <div className='main'>
            <div className='mainDiv' style={style}>
                <h1>This will display our To Visit List</h1>
                <form onSubmit={addToList}>
                    <label htmlFor='trailName'>Trail Name</label>
                    <input name='trailName' onChange={(e) => setListTrail(e.target.value)}/>
                    <br/>
                    <label htmlFor='address'>Address</label>
                    <input name='address' onChange={(e) => setListAdd(e.target.value)}/>
                    <button>Add Trail!</button>
                </form>
                <table>
                    <tbody>
                        <tr>
                            <th>Trail Name:</th>
                            <th>Address:</th>
                        </tr>
                        {listRows()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ToVisit;