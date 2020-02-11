import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper
    },
    main: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(2),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.palette.background.default,
      WebkitBoxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)',
      MozBoxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)',
      boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)'
    }
  })
);

const sections = [
  { title: 'Home', url: '/' },
  { title: 'Keynote & Plennary Speakers', url: 'keynote' },
  { title: 'Program', url: 'symposia' },
  { title: 'Scientific Advisory Commitees', url: 'commitee' },
  { title: 'Registration & Accommodation', url: 'registration' },
  { title: 'Abstract Submission', url: 'abstract' },
  { title: 'Transportation', url: 'transportation' },
  { title: 'Venue', url: 'venue' },
  { title: 'Local Attractions', url: 'tours' },
  { title: 'Contact', url: 'contact' }
];

export default function BaseView(props: { children: React.ReactNode }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header title="RegPep2020" sections={sections} />
      <Container component="main" className={classes.main} maxWidth="lg">
        {props.children}
      </Container>
      <Footer />
    </div>
  );
}
