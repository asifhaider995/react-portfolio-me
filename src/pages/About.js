import React from 'react'
import {Grid, Typography, Avatar, Icon, Button, makeStyles} from '@material-ui/core'

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import AvatarImg from '../assets/AvatarImg.jpg'

const useStyles = makeStyles((theme) => ({
  root : {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    height: '45rem',
    [theme.breakpoints.down('sm')]:{
      height: '90rem'
    }
  },
  outerGrid: {
    display: 'flex',
    alignItems: 'center',
    padding: '2rem',
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
    width: '100%',
    marginBottom: '1.5rem',
    [theme.breakpoints.down('sm')]:{
      margin: '1rem 0',
      padding: '1rem 0'
    }
  },
  heading: {
    fontSize: '3rem',
    fontFamily: 'Roboto'
  },
  body: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1rem',
    [theme.breakpoints.down('sm')]:{
      display: 'inline',
      margin: '0'
    }
  },
  mainContent : {
    display: 'inline',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
    margin: '0 1rem',
    backgroundColor: 'lightgrey',
    heigth: '100%',
    borderRadius: '.75rem',
    [theme.breakpoints.down('sm')]:{
      display: 'flex',
      padding: '1rem 0',
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
      width: '20rem',
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
      width: '20rem'
    }
  },
  descriptionHead: {
    fontSize: '26px',
    fontStyle: 'italic',
    paddingBottom: '1rem'
  },
  descriptionBody : {
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
    backgroundColor: 'lightgrey',
    heigth: '100%',
    width: '100%',
    borderRadius: '.75rem',
    marginLeft: '1rem',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
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
    backgroundColor: '#FE222F',
    width: '60%',
    height: '100%',
    padding: '.25rem',
    borderRadius: '.25rem',
    marginRight: '-.25rem',
  },
  backEndBar: {
    alignItems: 'center',
    backgroundColor: '#04B5FD',
    width: '40%',
    height: '100%',
    padding: '.25rem',
    borderRadius: '.25rem'
  },
  skillList: {
  },
  skillText: {
    fontFamily: 'Oxygen',
  },
  listGrid: {
    padding: '1rem'
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      width: '25rem'
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
    padding: '.5rem',
    borderRadius: '.5rem',
    width: '30%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '.75rem',
      margin: '0 1rem'
    }
  },
  downloadIcon: {
    border: '2px solid black',
    marginRight: '.25rem',
    borderRadius: '1rem',
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
    <div id='about-root' className={classes.root}>
      <Grid className={classes.outerGrid}>
        <Grid className={classes.innerGrid}>
          <Grid className={classes.headGrid}>
            <Typography variant='h3' className={classes.heading}>
              ABOUT ME
            </Typography>
          </Grid>
          <Grid className={classes.body}>
            <Grid className={classes.mainContent}>
              <Grid>
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
            </Grid>
            <Grid className={classes.skillGrid}>
              <Grid>
                <Grid className={classes.skillHead}>
                  <Typography variant='h5' className={classes.skillText}> Skill Set </Typography>
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
                      {techBlock("CSS3")}
                      {techBlock("SCSS")}
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
                  <Button color='primary' variant='contained' className={classes.downloadBtn}>
                    <Icon color='action' className={classes.downloadIcon}> <ArrowDownwardIcon /> </Icon>
                    Download my resume
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default About;
