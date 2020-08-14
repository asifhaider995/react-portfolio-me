import React from 'react'
import {Grid, Typography, makeStyles} from '@material-ui/core'

//////////////// component imports /////////////////////////

import Skills from '../components/about/Skills';
import Main from '../components/about/Main';

///////////////// Custom styles //////////////////////////

const useStyles = makeStyles((theme) => ({
  root : {
    alignItems: 'center',
    backgroundColor: theme.palette.action.selected,
    width: '100%',
    height: '52rem',
    [theme.breakpoints.down('sm')]:{
      height: '84rem'
    }
  },
  outerGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1rem 0',
    borderRadius: '1rem',
    height: '100%',
    [theme.breakpoints.down('sm')]:{
      display: 'flex',
      padding: '1rem',
    }
  },
  innerGrid: {
    width: '100%',
    height: '100%',
    diplay: 'inline',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '1rem',
    [theme.breakpoints.down('sm')]:{
      padding: '0'
    }
  },
  headGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '5rem',
    paddingBottom: '2rem',
    [theme.breakpoints.down('sm')]:{
      margin: '1rem 0',
      paddingTop: '1rem'
    }
  },
  heading: {
    fontSize: '4rem',
    fontFamily: 'Cambria',
    fontWidth: '1rem',
    fontStyle: 'capitalize'
  },
  body: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1rem',
    [theme.breakpoints.down('sm')]:{
      display: 'inline',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0',
    }
  },

}))



function About() {
  const classes = useStyles();
  return (
    <div id='about' className={classes.root}>
      <Grid className={classes.outerGrid}>
        <Grid className={classes.innerGrid}>
          <Grid className={classes.headGrid}>
            <Typography variant='h3' className={classes.heading}>
              About Me
            </Typography>
          </Grid>
          <Grid className={classes.body}>
            <Main />
            <Skills />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default About;
