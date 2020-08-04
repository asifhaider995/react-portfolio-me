import React from 'react'
import {makeStyles, Typography, Grid} from '@material-ui/core'

const useStyles = makeStyles((theme)=> ({
  root: {
    height: '4rem',
    backgroundColor: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    width: '99%',
    position: 'absolute'
  }
}))
function Footer(props) {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid>
        <Typography variant='subtitle1'> Portfolio &copy; 2020, <em>Asif Haider Khan</em></Typography>
      </Grid>
    </Grid>
  )
}

export default Footer;
