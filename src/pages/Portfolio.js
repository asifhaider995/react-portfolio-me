import React from 'react'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root : {
    alignItems: 'center',
    backgroundColor: 'red',
    height: '90rem'
  },
}))


function Portfolio() {
  const classes = useStyles();
  return (
    <div id='about-root' className={classes.root}>
      My Work
    </div>
  )
}

export default Portfolio;
