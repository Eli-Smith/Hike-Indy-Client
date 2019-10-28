import React, { useState, useEffect } from 'react';

const TrailsDisplay = (props) =>{
   
    return(
                <tr key={props.key}>
                    <td>{props.data.trailName}</td>
                    <td>{props.data.park}</td>
                    <td>{props.data.address}</td>
                    <td>{props.data.difficulty}</td>
                    <td>{props.data.length}</td>
                    <td>
                        <button>Add to your visit list!</button>
                    </td>
                </tr>
    )
}

export default TrailsDisplay;