import React from 'react'
import {makeStyles, Grid, Typography, Paper, Avatar, CardActionArea} from '@material-ui/core'
import Codepen from '../../assets/Codepen.png'
import Github from '../../assets/github.svg'

const useStyles = makeStyles((theme) => ({
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '2rem'
  },
  otherProjects: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70rem',
    [theme.breakpoints.down('sm')]: {
      width: '25rem'
    }
  },
  projectDirectories: {
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    width: '70rem',
    height: '100%',
    padding: '1rem',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      alignItems:'center',
      justifyContent: 'center',
      width: '25rem',
      height: '20rem'
    }
  },
  PaperGrid: {
    width: '30rem',
    height: '9rem',
    borderRadius: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 4rem',
    padding: '.25rem',
    [theme.breakpoints.down('sm')] : {
      margin: '2rem 0',
      width: '100%',
      height: '8rem'
    }
  },
  AvatarGrid: {
    width: '7rem',
    height: '7rem',
  },
  Avatar: {
    width: '100%',
    height: '100%',
  },
  AvatarTypoGrid: {
    height: '3rem',
    width: '17rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  cardActionArea: {
    width: '100%',
    height: '7rem',
    borderRadius: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')] : {
      width: '100%',
      height: '8rem'
    }
  },
  githubText: {
    fontFamily: 'collegiate',
    fontWeight: 'bold',
    fontSize: '1.85rem',
    color: 'black'
  },
  codepenText: {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: 'black'
  }
}))


function OpenSourceProjects() {
  const classes = useStyles();
  return (
      <Grid className={classes.otherProjects}>
        <Grid>
          <Grid className={classes.heading}>
            <Typography align='center' gutterBottom variant='h4'> Open Source Projects </Typography>
          </Grid>
          <Grid className={classes.projectDirectories}>
            <Paper elevation={3} className={classes.PaperGrid}>
              <a href='https://www.github.com/asifhaider995' target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none'}}>
                <CardActionArea className={classes.cardActionArea}>
                  <Grid className={classes.AvatarGrid}>
                    <Avatar src={Github} alt='github' className={classes.Avatar}/>
                  </Grid>
                  <Grid className={classes.AvatarTypoGrid}>
                    <Typography align='center' variant='h5'className={classes.githubText}>
                      Projects on Github
                    </Typography>
                  </Grid>
                </CardActionArea>
              </a>
            </Paper>
            <Paper elevation={3} className={classes.PaperGrid}>
              <a href='https://www.codepen.io/asifhaider995' target='_blank' rel='noopener noreferrer' style={{textDecoration: 'none'}}>
                <CardActionArea className={classes.cardActionArea}>
                  <Grid className={classes.AvatarGrid}>
                    <Avatar src={Codepen} alt='codepen' className={classes.Avatar} />
                  </Grid>
                  <Grid className={classes.AvatarTypoGrid}>
                    <Typography align='center' variant='h6' className={classes.codepenText}>
                      Projects on Codepen
                    </Typography>
                  </Grid>
                </CardActionArea>
              </a>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default OpenSourceProjects;
