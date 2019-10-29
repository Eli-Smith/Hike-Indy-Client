import React from 'react'

import Logout from './Logout/Logout'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  mainColor: {
      backgroundColor: '#3F7340 ',
  },
}));


const Navbar = (props) => {
    const classes = useStyles();
    
    return(
        <div className={classes.root}>
        <AppBar position="static" className={classes.mainColor}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h4" className={classes.title}>
              Hike Indy
            </Typography>
            <Button color="inherit"><Logout setSession={props.setSession}/></Button>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Navbar;