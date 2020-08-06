import React from 'react'
import {makeStyles, Toolbar, AppBar, Grid, Typography} from '@material-ui/core'
import {Link} from 'react-scroll';
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
    paddingBottom: theme.spacing(2),
    '&:hover' : {
      cursor: 'pointer'
    }
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
    width: theme.spacing(14),

  },
  navBtn: {
    width: '100%',
    padding: '.75rem',
    transitionDuration: '.5s',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
      borderRadius: '5px',
      zIndex: '1rem',
      cursor: 'pointer',
    },
  },
  activeNavBtn: {
    color: theme.palette.error.dark
  }
}))
function Navbar(props) {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} color='inherit' position='fixed'>
      <Toolbar>
        <Grid className={classes.logo}>
          <Link
            to="home"
            spy={true}
            smooth="easeInOutQuad"
            offset={-70}
            duration={1000}
          >
            <Typography className={classes.logoLeft}>P O R T F O L I O</Typography>
            <Typography className={classes.logoRight} align='left' variant='subtitle2' color='secondary'><em>@asifhaider995</em></Typography>
          </Link>
        </Grid>
        <Grid className={classes.spaceGrid} />
        <Grid className={classes.btnGrid}>
          <Grid className={classes.btnInnerGrid}>
            <Link
              activeClass={classes.activeNavBtn}
              to="home"
              spy={true}
              smooth="easeInOutQuad"
              offset={-70}
              duration={1000}
            >
              <Typography variant='button' align='center' className={classes.navBtn}>Home</Typography>
            </Link>
          </Grid>
          <Grid className={classes.btnInnerGrid}>
            <Link
              activeClass={classes.activeNavBtn}
              to="about"
              spy={true}
              smooth="easeInOutQuad"
              offset={-70}
              duration={1000}
            >
              <Typography variant='button' align='center' className={classes.navBtn}>About</Typography>
            </Link>
          </Grid>
          <Grid className={classes.btnInnerGrid}>
            <Link
              activeClass={classes.activeNavBtn}
              to="portfolio"
              spy={true}
              smooth="easeInOutQuad"
              offset={-70}
              duration={1000}
            >
              <Typography variant='button' align='center' className={classes.navBtn}>Portfolio</Typography>
            </Link>
          </Grid>
          <Grid className={classes.btnInnerGrid}>
          <Link
            activeClass={classes.activeNavBtn}
            to="contact"
            spy={true}
            smooth="easeInOutQuad"
            offset={-70}
            duration={1000}
          >
            <Typography variant='button' align='center' className={classes.navBtn}>Contact</Typography>
          </Link>
          </Grid>
        </Grid>

      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
