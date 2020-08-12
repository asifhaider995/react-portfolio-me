import React from 'react'
import {makeStyles,Modal, Grid, Typography, Paper, CardActionArea, CardMedia, CardContent} from '@material-ui/core'

import Cert1 from '../../assets/FCCRW.png';
import Cert2 from '../../assets/FCCJS.png';
import Cert3 from '../../assets/FCCFEL.png';

const useStyles = makeStyles((theme) => ({
  certGrid: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70rem',
    heigth: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '25rem',
    }
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '3rem'
  },
  certList: {
    height: '100%',
    padding: '3rem 0',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      width: '25rem',
    }
  },
  certItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '1rem',
    [theme.breakpoints.down('sm')]: {
      margin: '1rem 0'
    }
  },
  card: {
    padding: '.5rem',
    boxShadow: '1px .5rem .5rem'
  },
  media: {
    width: '21rem',
    height: '12rem'
  },
  content: {
    width: '100%',
  },
  institution: {
    fontWeight: 'bold'
  },
  certModal: {
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  modalMedia: {
    width: '44rem',
    height: '26rem',
    [theme.breakpoints.down('sm')]: {
      width: '21rem',
      height: '13rem',
    }
  },

}))

const certificationItems = [
  {
    title: "Responsive Web Design",
    img: Cert1,
    institution: "freeCodeCamp.org",
    src: "https://www.freecodecamp.org/certification/asifhaider995/responsive-web-design",
    description: ""
  },
  {
    title: "JavaScript data structures and Algorithms",
    img: Cert2,
    institution: "freeCodeCamp.org",
    src: "https://www.freecodecamp.org/certification/asifhaider995/javascript-algorithms-and-data-structures",
    description: ""
  },
  {
    title: "Front End Libraries",
    img: Cert3,
    institution: "freeCodeCamp.org",
    src: "https://www.freecodecamp.org/certification/asifhaider995/front-end-libraries",
    description: ""
  },
]



function Certifications() {
  const classes = useStyles();
  const [modal, setModal] = React.useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setModal(true)
  }
  const handleClose = (e) => {
    e.preventDefault();
    setModal(false)
  }

  return (
      <Grid className={classes.certGrid}>
        <Grid>
          <Grid className={classes.heading}>
            <Typography variant='h5' > My Certifications</Typography>
          </Grid>
          <Grid container spacing={6} className={classes.certList}>
            {certificationItems.map((items, i) => {
              return (
                <Grid
                  key={i}
                  item
                  xl={3} lg={4} md={6} sm={12} xs={12}
                  className={classes.certItem}
                >
                  <Paper elevation={3} className={classes.card}>
                    <CardActionArea onClick={handleClick} id={i}>
                      <CardMedia
                        className={classes.media}
                        image={items.img}
                        title={items.title}
                      />
                      <CardContent className={classes.content}>
                        <Typography className={classes.title} style={{fontSize: '16px'}}> {items.title} </Typography>
                        <Typography className={classes.institution} variant='subtitle2'> {items.institution} </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Paper>
                </Grid>
              )
            })}
            {certificationItems.map((items,i)=>{
              return(
                <Grid key={i}>
                  <Modal
                    open={modal}
                    onClose={handleClose}
                    aria-labelledby="certificate-modal-title"
                    aria-describedby="certificate-modal-description"
                    className={classes.certModal}
                  >
                    <Paper elevation={3} style={{padding: '1rem'}}>
                      <Typography variant='h4' align='center'>{items.title}</Typography>
                      <Grid></Grid>
                      <Grid style={{display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
                        <CardMedia title={items.title} image={items.img} className={classes.modalMedia} />
                      </Grid>
                      <Typography style={{margin: '1rem 0'}} variant='h5' align='center'> From {items.institution} </Typography>
                      <Typography style={{margin: '1rem 0'}} variant='h6' align='center'> About this Certification </Typography>
                      <Typography style={{margin: '1rem 0'}} variant='body1' align='justify'> {items.description} </Typography>
                      <Typography style={{margin: '1rem 0'}} variant='body2' align='center'>
                        Find the certification <a href={items.src} target='_blank' rel="noopener noreferrer"> here </a>
                      </Typography>
                    </Paper>
                  </Modal>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
  )
}

export default Certifications;
