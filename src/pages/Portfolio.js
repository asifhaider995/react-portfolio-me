import React from 'react'
import {makeStyles, Grid, Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root : {
    alignItems: 'center',
    height: '90rem'
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
    fontSize: '4rem',
    fontFamily: 'Cambria',
    fontWidth: '1rem',
    fontStyle: 'capitalize'
  },
  mainContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
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
              <Typography align='center' variant='h5'> My Personal Projects </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Portfolio;
