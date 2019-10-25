import React from 'react'

import Logout from './Logout/Logout'


const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
}

const Navbar = (props) => {
    
    return(
        <div className='main'>
            <div className='mainDiv'>
                <nav style={style}>
                    <span>Sign In</span>
                    <br/>
                    <span>Create an account</span>
                    <br/>
                    <Logout setSession={props.setSession}/>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;