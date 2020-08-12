import React from 'react'
import {makeStyles, fade, Grid, Typography, Icon, TextField, Button} from '@material-ui/core'

import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';


const useStyles = makeStyles((theme) => ({
  root : {
    alignItems: 'center',
    height: '52rem',
    width: '100%',
    backgroundColor: fade(theme.palette.info.light, 0.1),
    [theme.breakpoints.down('sm')]: {
      height: '55rem'
    }
  },
  outerGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    margin: '1rem 0',
  },
  innerGrid: {
    display: 'inline',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem'
  },
  headingGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem 0',
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
  infoGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      alignItems: 'center',

    }
  },
  email: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '17rem',
    height: '3rem',
    border: '1px solid black',
    borderRadius: '.5rem',
    marginRight: '6rem',
    transitionDuration: '.5s',
    '&:hover' : {
      backgroundColor: theme.palette.error.dark,
      color: 'white'
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: '0',
      width: '100%',
      marginTop: '2rem',
      marginBottom: '2rem'
    }
  },
  phone: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '17rem',
    height: '3rem',
    border: '1px solid black',
    borderRadius: '.5rem',
    marginLeft: '5rem',
    transitionDuration: '.5s',
    '&:hover' : {
      backgroundColor: theme.palette.primary.dark,
      color: 'white'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      width: '100%',
      marginTop: '2rem',
      marginBottom: '2rem'
    }
  },
  icon : {
    marginRight: '0.75rem'
  },
  formGrid: {
    display: 'flex',
    alignItems: 'center',
    justify: 'center',
    width: '50rem',
    margin: '1rem 0',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  formPaper: {
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    width: '44.8rem',
    height: '100%',
    padding: '2.5rem',
    borderRadius: '5px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
      padding: '1rem 0',
      paddingLeft: '0'
    }
  },
  formField: {
    margin: '1rem 0',
    height: '100%',
    borderRadius: '5px',
    color: 'black',
  },
  formBtnGrid: {
    paddingTop: '1rem',
    width: '10rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  sendBtn: {
    height: '2.75rem',
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid black',
    borderRadius: '5px',
    '&:hover': {
      color: 'white',
      backgroundColor: theme.palette.error.dark
    }
  }
}))


function Contact(props) {
  const classes = useStyles();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div id='contact' className={classes.root}>
      <Grid className={classes.outerGrid}>
        <Grid className={classes.innerGrid}>
          <Grid className={classes.headingGrid}>
            <Typography align='center' className={classes.typoHead}>
              Contacts
            </Typography>
          </Grid>
          <Grid className={classes.bodyGrid}>
            <Grid className={classes.infoGrid}>
              <Grid className={classes.email}>
                <Icon className={classes.icon}><EmailIcon /></Icon>
                <Typography align='center'>
                  asif.haider995@gmail.com
                </Typography>
              </Grid>
              <Grid className={classes.phone}>
                <Icon className={classes.icon} ><PhoneIcon /></Icon>
                <Typography align='center'>
                  +8801684656163
                </Typography>
              </Grid>
            </Grid>
            <Grid className={classes.formGrid}>
              <form onSubmit={handleSubmit}>
                <Grid className={classes.formPaper}>
                  <Typography align='center'> You can leave me a message </Typography>
                  <TextField
                    name='name'
                    placeholder='Your Name'
                    label='Name'
                    required
                    fullWidth
                    variant='outlined'
                    error={false}
                    helperText='What are you doing?'
                    className={classes.formField}
                  />
                  <TextField
                    name='email'
                    placeholder='Your Email'
                    label='Email'
                    required
                    fullWidth
                    variant='outlined'
                    error={false}
                    helperText='What are you doing?'
                    className={classes.formField}
                  />
                  <TextField
                    multiline
                    rows={5}
                    placeholder='Your Message'
                    label='Message'
                    required
                    fullWidth
                    variant='outlined'
                    error={false}
                    helperText='What are you doing?'
                    className={classes.formField}
                  />
                  <Grid className={classes.formBtnGrid}>
                    <Button className={classes.sendBtn} variant='contained' fullWidth color='primary' type="submit"> Send Message </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Contact;
