import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));



const Logout = (props) =>{
    const classes = makeStyles;

    const toggleLogout = () => {
        props.setSession(undefined);
    }

    return(
        <div className='main'>
            <div className="mainDiv">
                <Button variant="contained" style={{backgroundColor: '#e4a436'}} className={classes.button} onClick={toggleLogout}>
                    Log Out
                </Button>
            </div>
        </div>
    )
}

export default Logout