import React from 'react'
import {makeStyles, Toolbar, AppBar, Grid, Typography, Menu, MenuItem, IconButton, Icon} from '@material-ui/core'
import MoreIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import DescriptionIcon from '@material-ui/icons/Description';
import ContactsIcon from '@material-ui/icons/Contacts';

import {Link} from 'react-scroll';


const useStyles = makeStyles((theme)=> ({
  root: {
    height: '4rem',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '4.5rem',
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
  navBtnMobile: {
    width: '100%',
  },
  activeNavBtn: {
    color: theme.palette.error.dark,
  },
  sectionMobile: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex'
    }
  },
  navBtnIconsMobile: {
    display: 'inline-block',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '5px',
    marginBottom: '-5px'
  },

}))



function Navbar(props) {
  const classes = useStyles();


  /////////// Mobile Menu /////////////////////////////////////

  const [mobileAnchorEl, setMobileAnchorEl] = React.useState(null);

  const handleMobileMenuClose = () => {
   setMobileAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
   setMobileAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Grid>
      <Menu
       anchorEl={mobileAnchorEl}
       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
       id={mobileMenuId}
       keepMounted
       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
       open={Boolean(mobileAnchorEl)}
       onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <Link
           activeClass={classes.activeNavBtn}
           to="home"
           spy={true}
           smooth="easeInOutQuad"
           offset={-70}
           duration={1400}
           onClick={handleMobileMenuClose}
          >
            <Icon className={classes.navBtnIconsMobile}> <HomeIcon /> </Icon>
            <Typography variant='button' align='center' className={classes.navBtnMobile}>
              Home
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
           activeClass={classes.activeNavBtn}
           to="about"
           spy={true}
           smooth="easeInOutQuad"
           offset={-70}
           duration={1400}
           onClick={handleMobileMenuClose}
          >
            <Icon className={classes.navBtnIconsMobile}> <InfoIcon /> </Icon>
            <Typography variant='button' align='center' className={classes.navBtnMobile}>About</Typography>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            activeClass={classes.activeNavBtn}
            to="portfolio"
            spy={true}
            smooth="easeInOutQuad"
            offset={-70}
            duration={1400}
            onClick={handleMobileMenuClose}
          >
            <Icon className={classes.navBtnIconsMobile}> <DescriptionIcon /> </Icon>
            <Typography variant='button' align='center' className={classes.navBtnMobile}>Portfolio</Typography>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            activeClass={classes.activeNavBtn}
            to="contact"
            spy={true}
            smooth="easeInOutQuad"
            offset={-70}
            duration={1400}
            onClick={handleMobileMenuClose}
          >
            <Icon className={classes.navBtnIconsMobile}> <ContactsIcon /> </Icon>
            <Typography variant='button' align='center' className={classes.navBtnMobile}>Contact</Typography>
          </Link>
        </MenuItem>
      </Menu>
    </Grid>
  );

  /////////////////////////////////////////////////////////////

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
        <Grid className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Grid>
      </Toolbar>
      {renderMobileMenu}
    </AppBar>
  )
}

export default Navbar;
