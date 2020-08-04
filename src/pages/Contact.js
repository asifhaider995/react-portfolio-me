import React from 'react'
import {makeStyles, Paper, Grid, Typography, Icon} from '@material-ui/core'

import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
  root : {
    alignItems: 'center',
    height: '38rem',
  },
  outerGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    margin: '1rem 0',
    border: '1px black solid'
  },
  innerGrid: {
    display: 'inline',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem'
  },
  headingGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem 0',
    [theme.breakpoints.down('sm')]:{
      padding: '1rem 0'
    }
  },
  typoHead: {
    fontSize: '3rem'
  },
  infoGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      alignItems: 'center',

    }
  },
  email: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '17rem',
    height: '3rem',
    border: '1px solid black',
    borderRadius: '.5rem',
    marginRight: '5rem',
    transitionDuration: '.5s',
    '&:hover' : {
      backgroundColor: theme.palette.error.dark,
      color: 'white'
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: '0',
      width: '20rem',
      marginTop: '2rem',
      marginBottom: '2rem'
    }
  },
  phone: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '17rem',
    height: '3rem',
    border: '1px solid black',
    borderRadius: '.5rem',
    marginLeft: '5rem',
    transitionDuration: '.5s',
    '&:hover' : {
      backgroundColor: theme.palette.primary.dark,
      color: 'white'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      width: '20rem',
      marginTop: '2rem',
      marginBottom: '2rem'
    }
  },
  icon : {
    marginRight: '0.75rem'
  },
  formGrid: {

  }
}))


function Contact() {
  const classes = useStyles();
  return (
    <div id='about-root' className={classes.root}>
      <Grid className={classes.outerGrid}>
        <Grid className={classes.innerGrid}>
          <Grid className={classes.headingGrid}>
            <Typography align='center' className={classes.typoHead}>
              Contacts
            </Typography>
          </Grid>
          <Grid className={classes.bodyGrid}>
            <Grid className={classes.infoGrid}>
              <Grid className={classes.email}>
                <Icon className={classes.icon}><EmailIcon /></Icon>
                <Typography align='center'>
                  asif.haider995@gmail.com
                </Typography>
              </Grid>
              <Grid className={classes.phone}>
                <Icon className={classes.icon} ><PhoneIcon /></Icon>
                <Typography align='center'>
                  +8801684656163
                </Typography>
              </Grid>
            </Grid>
            <Grid className={classes.formGrid}>
              <form>
              </form>
            </Grid>
          </Grid>
          <Paper elevation={2}>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Contact;
