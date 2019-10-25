import React from 'react'

const Logout = (props) =>{

    const toggleLogout = () => {
        props.setSession(undefined);
    }

    return(
        <div className='main'>
            <div className="mainDiv">
                <span onClick={toggleLogout}>Log Out</span>
            </div>
        </div>
    )
}

export default Logout