import React from 'react'
import {makeStyles, Grid, Typography, Paper, Avatar, CardActionArea} from '@material-ui/core'
import Codepen from '../assets/Codepen.png'
import Github from '../assets/github.svg'

const useStyles = makeStyles((theme) => ({
  root : {
    alignItems: 'center',
    height: '75rem',
    [theme.breakpoints.down('sm')]: {
      height: '96rem',
    }
  },
  outerGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    margin: '1rem 0',
    border: '1px black solid'
  },
  innerGrid: {
    display: 'inline-block',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem'
  },
  headingGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 0',
    [theme.breakpoints.down('sm')]:{
      padding: '1rem 0'
    }
  },
  typoHead: {
    fontSize: '4rem',
    fontFamily: 'Cambria',
    fontWidth: '1rem',
    fontStyle: 'capitalize'
  },
  mainContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  projectList: {
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center'
  },
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
      width: '20rem'
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
  otherProjects: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70rem',
    [theme.breakpoints.down('sm')]: {
      width: '20rem'
    }
  },
  projectDirectories: {
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    width: '70rem',
    height: '10rem',
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
  }
}))


function Portfolio() {
  const classes = useStyles();
  return (
    <div id='portfolio' className={classes.root}>
      <Grid className={classes.outerGrid}>
        <Grid className={classes.innerGrid}>
          <Grid className={classes.headingGrid}>
            <Typography className={classes.typoHead} align='center'>My Work</Typography>
          </Grid>
          <Grid className={classes.mainContent}>
            <Grid className={classes.projectList}>
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
                            <Typography
                              align='center' variant='h5'
                              style={{fontFamily: 'collegiate', fontWeight: 'bold', fontSize: '1.85rem', color: 'black'}}>
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
                            <Typography align='center' variant='h6'
                            style={{fontFamily: 'monospace', fontWeight: 'bold', color: 'black'}}> Projects on Codepen </Typography>
                          </Grid>
                        </CardActionArea>
                      </a>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Portfolio;
