import React from 'react'
import {makeStyles, Grid, Typography, Paper, CardActionArea, CardMedia, CardContent} from '@material-ui/core'

import Cert1 from '../../assets/FCCRW.png';
import Cert2 from '../../assets/FCCJS.png';

const useStyles = makeStyles((theme) => ({
  certGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70rem',
    [theme.breakpoints.down('sm')]: {
      width: '25rem'
    }
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '3rem'
  },
  certList: {
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    padding: '1rem',
    width: '70rem',
    height: '23rem',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      width: '25rem',
      height: '50rem',
    }
  },
  certItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    margin: '0 4rem',
    [theme.breakpoints.down('sm')]: {
      margin: '2rem 0'
    }
  },
  card: {
    padding: '.5rem',
    boxShadow: '1px .5rem .5rem'
  },
  media: {
    width: '24rem',
    height: '13.75rem'
  },
  content: {
    width: '100%',
  }

}))


function Certifications() {
  const classes = useStyles();
  return (
      <Grid className={classes.certGrid}>
        <Grid>
          <Grid className={classes.heading}>
            <Typography variant='h5' > My Certifications</Typography>
          </Grid>
          <Grid className={classes.certList}>
            <Grid
              item
              xl={6} lg={6} md={12} sm={12} xs={12}
              className={classes.certItem}
            >
              <Paper elevation={3} className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={Cert1}
                    title="Responsive Web"
                  />
                  <CardContent className={classes.content}>
                    <Typography style={{fontSize: '18px'}}> Responsive Web Design </Typography>
                    <Typography variant='subtitle2'> freeCodeCamp </Typography>
                  </CardContent>
                </CardActionArea>
              </Paper>
            </Grid>
            <Grid
              item
              xl={6} lg={6} md={12} sm={12} xs={12}
              className={classes.certItem}
            >
              <Paper elevation={3} className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={Cert2}
                    title="JS Data Struct and Algo"
                  />
                  <CardContent className={classes.content}>
                    <Typography style={{fontSize: '18px'}}> JavaScript Datastructures and Algorithms </Typography>
                    <Typography variant='subtitle2'> freeCodeCamp </Typography>
                  </CardContent>
                </CardActionArea>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default Certifications;
