import React from 'react'
import {makeStyles, Paper, Grid, Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root : {
    width: '100%',
    alignItems: 'center',
    height: '40rem',
    padding: '3rem'
  },
  outerGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem'
  },
  innerGrid: {
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem'
  }
}))


function Contact() {
  const classes = useStyles();
  return (
    <div id='about-root' className={classes.root}>
      <Grid className='classes.outerGrid'>
        <Grid className='classes.innerGrid'>
          <Grid className='classes.headingGrid'>
            <Typography align='center' variant='h3' className='classes.typoHead'>
              Contacts
            </Typography>
          </Grid>
          <Paper elevation={2}>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Contact;
