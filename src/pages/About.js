import React from 'react'
import {Grid, Paper, Typography, Avatar, Icon, Button, makeStyles} from '@material-ui/core'
import {Element} from 'react-scroll';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GetAppIcon from '@material-ui/icons/GetApp';

import AvatarImg from '../assets/AvatarImg.jpg'

const useStyles = makeStyles((theme) => ({
  root : {
    alignItems: 'center',
    backgroundColor: theme.palette.action.selected,
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
  mainContent : {
    display: 'inline',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    margin: '0 1rem',
    heigth: '100%',
    borderRadius: '.75rem',
    [theme.breakpoints.down('md')]:{
      height: '33rem'
    },
    [theme.breakpoints.down('sm')]:{
      display: 'flex',
      padding: '1.5rem 0',
      margin: '0',
      width: '100%',
    }
  },
  avatarGrid: {
    width: '16rem',
    height: '100%',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    }
  },
  avatar: {
    width: '12rem',
    height: '12rem',
    border: '2px solid black'
  },
  description: {
    height: '100%',
    width: '16rem',
    padding: '0 1rem',
    display: 'block',
    alignItems: 'center',
    textAlign: 'justify',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      padding: '1rem 0'
    }
  },
  descriptionHead: {
    fontSize: '26px',
    fontStyle: 'italic',
    paddingBottom: '1rem'
  },
  descriptionBody : {
    fontFamily: 'Cambria',
    fontSize: '16px',
    width: '100%'
  },
  social : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '.5rem 0'
  },
  socialIcons : {
    margin: '0 .5rem'
  },
  skillGrid: {
    display: 'inline',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    heigth: '100%',
    width: '100%',
    borderRadius: '.75rem',
    marginLeft: '1rem',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      margin: '1rem 0',
      marginRight: '0',
      padding: '0'
    }
  },
  skillHead: {
    padding: '1rem 0',
  },
  skillRatio: {
    width: '100%',
  },
  skillBar: {
    margin: '1rem 0',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    height: '1.5rem',
  },
  frontEndBar: {
    alignItems: 'center',
    backgroundColor: theme.palette.info.light,
    width: '60%',
    height: '100%',
    padding: '.25rem',
    borderRadius: '.25rem',
    marginRight: '-.25rem',
  },
  backEndBar: {
    alignItems: 'center',
    backgroundColor: theme.palette.success.light,
    width: '40%',
    height: '100%',
    padding: '.25rem',
    borderRadius: '.25rem'
  },
  skillList: {
  },
  skillText: {
    fontFamily: 'Cambria',
    fontStyle: 'capitalize'
  },
  listGrid: {
    padding: '1rem',
    display: 'inline',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')] : {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    }
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      width: '100%'
    }
  },
  techGrid: {
    backgroundColor: '#232323',
    color: 'white',
    padding: '.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '.75rem',
    width: '50%',
    margin: '.5rem 1rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  techGridText: {
    fontFamily: 'monotype',
    fontSize: '15px',
  },
  downloadBtnGrid:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '.5rem 1rem',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem 0'
    }
  },
  downloadBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '.5rem',
    width: '50%',
    transitionDuration: '.75s',
    '&:hover':  {
      color: 'white',
      backgroundColor: theme.palette.info.dark
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: '0 1rem'
    }
  },
  downloadIcon: {
    marginRight: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      margin: '0 .5rem'
    }
  }


}))



function About() {
  const classes = useStyles();
  const description = (
    <Grid className={classes.description}>
      <Typography variant='h5' align='center' className={classes.descriptionHead}>Who am I?</Typography>
      <Typography variant='body1' className={classes.descriptionBody}>
        I am Asif Haider Khan. I completed my Bachelor's degree
        in Computer Science and Engineering from North South University,
        Dhaka, Bangladesh.
      </Typography>
    </Grid>
  )
  const techBlock = (str) => {
    return (
      <Grid className={classes.techGrid}>
        <Typography align='center' className={classes.techGridText}>{str}</Typography>
      </Grid>
    )
  }
  return (
    <div id='about' className={classes.root}>
      <Grid className={classes.outerGrid}>
        <Grid className={classes.innerGrid}>
          <Grid className={classes.headGrid}>
            <Element name='about' className='element'>
              <Typography variant='h3' className={classes.heading}>
                About Me
              </Typography>
            </Element>
          </Grid>
          <Grid className={classes.body}>
            <Paper elevation={2} className={classes.mainContent}>
              <Grid style={{padding: '1rem'}}>
                <Grid className={classes.avatarGrid}>
                  <Avatar className={classes.avatar} alt="me" src={AvatarImg} />
                </Grid>
                {description}
                <hr />
                <Typography
                  variant='body1'
                  style={{marginTop: '1rem', fontSize: '16px'}}>
                    Visit my social profiles
                </Typography>
                <Grid className={classes.social}>
                  <Icon fontSize='large' className={classes.socialIcons}>
                    <a href='https://www.facebook.com/asif.haider3' target='_blank' rel='noopener noreferrer'>
                      <FacebookIcon />
                    </a>
                  </Icon>
                  <Icon fontSize='large' className={classes.socialIcons}>
                    <a href='https://www.twitter.com/asifhaider995' target='_blank' rel='noopener noreferrer'>
                      <TwitterIcon />
                    </a>
                  </Icon>
                  <Icon fontSize='large' className={classes.socialIcons}>
                    <a href='https://www.instagram.com/asif_haidr' target='_blank' rel='noopener noreferrer'>
                      <InstagramIcon />
                    </a>
                  </Icon>
                </Grid>
              </Grid>
            </Paper>
            <Paper elevation={3} className={classes.skillGrid}>
              <Grid>
                <Grid className={classes.skillHead}>
                  <Typography variant='h4' className={classes.skillText}> Skill Set </Typography>
                </Grid>
                <hr />
                <Grid className={classes.skillRatio}>
                  <Typography align='center' variant='body1' className={classes.skillText}>
                    My <strong>frontend</strong> to <strong>backend</strong> skill ratio
                  </Typography>
                  <Grid className={classes.skillBar}>
                    <Grid className={classes.frontEndBar}>
                      <Typography align='left' className={classes.skillText}>
                        Frontend (60%)
                      </Typography>
                    </Grid>
                    <Grid className={classes.backEndBar}>
                      <Typography align='right'className={classes.skillText}>
                        (40%) Backend
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <hr />
                <Grid className={classes.skillList}>
                  <Typography align='center' variant='body1' className={classes.skillText}>
                    <strong>Technologies</strong> I prefer
                  </Typography>
                  <Grid className={classes.listGrid}>
                    <Grid className={classes.listItem}>
                      {techBlock("HTML5")}
                      {techBlock("CSS3/SCSS")}
                      {techBlock("Bootstrap 4")}
                    </Grid>
                    <Grid className={classes.listItem}>
                      {techBlock("Javascript")}
                      {techBlock("React.js")}
                      {techBlock("Redux.js")}
                    </Grid>
                    <Grid className={classes.listItem}>
                      {techBlock("Python")}
                      {techBlock("Django")}
                      {techBlock("Django Rest")}
                    </Grid>
                  </Grid>
                </Grid>
                <hr />
                <Grid className={classes.downloadBtnGrid}>
                  <Button color='inherit' variant='outlined' className={classes.downloadBtn}>
                    <Icon className={classes.downloadIcon} color='inherit'> <GetAppIcon /> </Icon>
                    Download my resume
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default About;
