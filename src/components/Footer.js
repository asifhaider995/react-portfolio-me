import React from 'react'
import {makeStyles, Typography, Grid, Fab} from '@material-ui/core'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import {animateScroll as scroll} from 'react-scroll';
const useStyles = makeStyles((theme)=> ({
  root: {
    height: '13%',
    backgroundColor: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    width: '99%',
    position: 'absolute'
  },
  outerGrid: {
    display: 'inline',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  btnGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollToTopBtn: {
    transform: 'rotate(-90deg)',
    bottom: '1.5rem',
    [theme.breakpoints.down('sm')]:{
      bottom: '1rem',
    }
  },
  typoGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem'
  },
}))
function Footer(props) {
  const classes = useStyles();
  function handleClick(event) {
    event.preventDefault();
    scroll.scrollToTop({smooth: "easeInOutQuad", delay: "10"});
  }
  return (
    <Grid className={classes.root}>
      <Grid className={classes.outerGrid}>
        <Grid className={classes.btnGrid}>
          <Fab onClick={handleClick} size="medium" color="secondary" aria-label="up" className={classes.scrollToTopBtn}>
            <DoubleArrowIcon />
          </Fab>
        </Grid>
        <Grid className={classes.typoGrid}>
          <Typography variant='subtitle2'> Portfolio &copy; 2020, <em>Asif Haider Khan</em></Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer;
