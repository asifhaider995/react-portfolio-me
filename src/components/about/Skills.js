import React from 'react'
import {Grid, Paper, Typography, Icon, Button, makeStyles} from '@material-ui/core'

import GetAppIcon from '@material-ui/icons/GetApp';

import Resume from '../../files/Resume.pdf'

const useStyles = makeStyles((theme) => ({
  skillGrid: {
    display: 'block',
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



function Skills() {
  const classes = useStyles();
  const handleDownload = (event) => {
    event.preventDefault()
    const link = document.createElement('a');
    link.href = Resume;
    link.target ='_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const techBlock = (str) => {
    return (
      <Grid className={classes.techGrid}>
        <Typography align='center' className={classes.techGridText}>{str}</Typography>
      </Grid>
    )
  }
  return (
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
          <Button onClick={handleDownload} color='inherit' variant='outlined' className={classes.downloadBtn}>
            <Icon className={classes.downloadIcon} color='inherit'> <GetAppIcon /> </Icon>
            Download my resume
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Skills;
