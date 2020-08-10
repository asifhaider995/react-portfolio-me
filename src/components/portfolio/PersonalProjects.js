import React from 'react'
import {makeStyles, Grid, Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '2rem'
  },
  personalProjects: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70rem',
    [theme.breakpoints.down('sm')]: {
      width: '25rem'
    }
  },
  personalProjectList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70rem',
    height: '30rem',
    border: '1px solid black',
    padding: '1rem',
    [theme.breakpoints.down('sm')]: {
      width: '20rem',
      height: '50rem'
    }
  },
}))


function PersonalProjects() {
  const classes = useStyles();
  return (
      <Grid className={classes.personalProjects}>
        <Grid>
          <Grid className={classes.heading}>
            <Typography align='center' variant='h5'> My Personal Projects </Typography>
          </Grid>
          <Grid className={classes.personalProjectList}>
            They are being created, wait...
          </Grid>
        </Grid>
      </Grid>
  )
}

export default PersonalProjects;
