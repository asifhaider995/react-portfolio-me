import React from 'react'
import {makeStyles, Toolbar, AppBar, Buttons} from '@material-ui/core'

const useStyles = makeStyles((theme)=> ({
  root: {
    height: '3rem',
    backgroundColor: theme.palette.text.primary
  }
}))
function Navbar(props) {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        {/* <---  Logo --> */}
        {/* <--- Big Gap --> */}
        {/* <--- Home button --> */}
        {/* <--- About button --> */}
        {/* <--- Portfolio button --> */}
        {/* <--- Home button --> */}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
