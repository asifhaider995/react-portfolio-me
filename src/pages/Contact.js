import React from 'react'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root : {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'grey',
    height: '45rem'
  },
}))


function Contact() {
  const classes = useStyles();
  return (
    <div id='about-root' className={classes.root}>
      About
    </div>
  )
}

export default Contact;
