import React from 'react';
import {Grid, Typography, Button, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root : {
    width: '100%',
    height: '45rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]:{
      height: '33rem',
    }
  },
  outerGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: '1rem',
    padding: '1rem',
    [theme.breakpoints.down('sm')]:{
      padding: '1rem',
      margin: '0',
      height: '30rem',
    }
  },
  innerGrid: {
    diplay: 'inline-block',
    justifyContent: 'center',
    textAlign: 'center',
    width: '70%',
    padding: '2rem',
    backgroundColor: 'lightgrey',
    borderRadius: '1rem',
    [theme.breakpoints.down('sm')]:{
      width: '100%'
    }
  },
  typoGrid: {
    width: '100%',
  },
  typo : {
    margin: '4rem',
    padding: '4rem',
    fontFamily: 'Oxygen',
    [theme.breakpoints.down('sm')]:{
      padding: '0',
      margin: '2rem 0',
      fontSize: '28px'
    }
  },
  btnGrid: {
    width: '100%',
    height: '2.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]:{
      paddingTop: '2rem',
      marginBottom: '-1rem'
    }
  },
  btn : {
    width: '15rem',
    height: '100%'
  }
}))


function Home() {
  const classes = useStyles();

  return (
    <div id='home-root' className={classes.root}>
      <Grid className={classes.outerGrid}>
        <Grid className={classes.innerGrid}>
          <Grid className={classes.typoGrid}>
            <Typography gutterBottom className={classes.typo} variant='h3'> Welcome to my Portfolio Website </Typography>
          </Grid>
          <Grid className={classes.btnGrid}>
            <Button className={classes.btn} variant='contained' color='primary'> View my Portfolio </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home;
