import React from 'react'
import {makeStyles, Grid, Typography} from '@material-ui/core';
import OpenSourceProjects from '../components/portfolio/OpenSourceProjects'
import PersonalProjects from '../components/portfolio/PersonalProjects'
import Certifications from '../components/portfolio/Certifications'

const useStyles = makeStyles((theme) => ({
  root : {
    alignItems: 'center',
    height: '96rem',
    [theme.breakpoints.down('sm')]: {
      height: '150rem',
    }
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
    display: 'inline-block',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem'
  },
  headingGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 0',
    [theme.breakpoints.down('sm')]:{
      padding: '1rem 0'
    }
  },
  typoHead: {
    fontSize: '4rem',
    fontFamily: 'Cambria',
    fontWidth: '1rem',
    fontStyle: 'capitalize'
  },
  mainContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  projectList: {
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '2rem'
  },
}))


function Portfolio() {
  const classes = useStyles();
  return (
    <div id='portfolio' className={classes.root}>
      <Grid className={classes.outerGrid}>
        <Grid className={classes.innerGrid}>
          <Grid className={classes.headingGrid}>
            <Typography className={classes.typoHead} align='center'>My Work</Typography>
          </Grid>
          <Grid className={classes.mainContent}>
            <Grid className={classes.projectList}>
              <PersonalProjects />
              <OpenSourceProjects />
              <Certifications />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Portfolio;
