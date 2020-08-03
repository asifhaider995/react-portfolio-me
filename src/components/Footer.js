import React from 'react'
import {makeStyles, Toolbar, AppBar} from '@material-ui/core'

const useStyles = makeStyles((theme)=> ({
  root: {
    height: '3rem',
    width: '1rem',
    backgroundColor: theme.palette.text.primary
  }
}))
function Footer(props) {
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

export default Footer;
