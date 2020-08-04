import React from 'react'
import {makeStyles, Toolbar, AppBar, Button, Grid, Typography} from '@material-ui/core'

const useStyles = makeStyles((theme)=> ({
  root: {
    height: '4rem',
    [theme.breakpoints.down('sm')]: {
      height: '4.5rem'
    }
  },
  logo: {
    color: 'black',
    width: theme.spacing(50),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  spaceGrid: {
    width: theme.spacing(100),
    [theme.breakpoints.down('md')] : {
      width: 'auto'
    }
  },
  btnGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')] : {
      display: 'none'
    }
  },
  btnInnerGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    width: theme.spacing(13),
  },
  navBtn: {
    transitionDuration: '.35s',
    '&:hover': {
      border: '2px solid black',
      borderRadius: '5px',
      backgroundColor: 'black',
      color: 'white',
    },
  }
}))
function Navbar(props) {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} color='inherit' position='fixed'>
      <Toolbar>
        {/* <---  Logo --> */}
        <Grid className={classes.logo}>
          <Typography className={classes.logoLeft}>P O R T F O L I O</Typography>
          <Typography className={classes.logoRight} align='left' variant='subtitle2' color='secondary'><em>@asifhaider995</em></Typography>
        </Grid>
        {/* <---  Logo --> */}
        {/* <--- Big Gap --> */}
        <Grid className={classes.spaceGrid} />
        <Grid className={classes.btnGrid}>
          <Grid className={classes.btnInnerGrid}>
            <Button className={classes.navBtn}>Home</Button>
          </Grid>
          <Grid className={classes.btnInnerGrid}>
            <Button className={classes.navBtn}>About</Button>
          </Grid>
          <Grid className={classes.btnInnerGrid}>
            <Button className={classes.navBtn}>Portfolio</Button>
          </Grid>
          <Grid className={classes.btnInnerGrid}>
            <Button className={classes.navBtn}>Contact</Button>
          </Grid>
        </Grid>

      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
