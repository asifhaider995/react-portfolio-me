import React from 'react'
import {Grid, Paper, Typography, Avatar, Icon, makeStyles} from '@material-ui/core'


//////////////// Icon imports ///////////////////////////

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

/////////////// File imports ///////////////////////////

import AvatarImg from '../../assets/AvatarImg.jpg'

///////////////////////////////////////////////////////


////////////// Custom Styles //////////////////////////

const useStyles = makeStyles((theme) => ({
  aboutContent : {
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

}))


const data = {
  description: "I am Asif Haider Khan. I completed my Bachelor's degree in Computer Science and Engineering from North South University, Dhaka, Bangladesh.",
  socialLinks : {
    facebook: 'https://www.facebook.com/asif.haider3',
    twitter: 'https://www.twitter.com/asifhaider995',
    instagram: 'https://www.instagram.com/asif_haidr',
  }
}

function Main() {
  const classes = useStyles();
  const description = (
    <Grid className={classes.description}>
      <Typography variant='h5' align='center' className={classes.descriptionHead}>Who am I?</Typography>
      <Typography variant='body1' className={classes.descriptionBody}>
        {data.description}
      </Typography>
    </Grid>
  )
  return (
    <Paper elevation={2} className={classes.aboutContent}>
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
            <a href={data.socialLinks.facebook} target='_blank' rel='noopener noreferrer'>
              <FacebookIcon />
            </a>
          </Icon>
          <Icon fontSize='large' className={classes.socialIcons}>
            <a href={data.socialLinks.twitter} target='_blank' rel='noopener noreferrer'>
              <TwitterIcon />
            </a>
          </Icon>
          <Icon fontSize='large' className={classes.socialIcons}>
            <a href={data.socialLinks.instagram} target='_blank' rel='noopener noreferrer'>
              <InstagramIcon />
            </a>
          </Icon>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Main;
