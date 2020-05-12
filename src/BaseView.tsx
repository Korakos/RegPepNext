import Container from '@material-ui/core/Container';
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
  { title: 'Home', url: '/', selected: false },
  { title: 'Registration', url: 'registration', disabled: true },
  { title: 'Abstract Submission', url: 'abstract', disabled: true },
  { title: 'Register Now', url: 'registerNow', highlightedView: true },
  { title: 'Plenary Keynote Speakers', url: 'keynote' },
  { title: 'Program', url: 'symposia' },
  { title: 'Participating Committees', url: 'commitee' },
  { title: 'Venue', url: 'venue' },
  { title: 'Accommodations', url: 'travel' },
  { title: 'Local Attractions', url: 'tours' },
  { title: 'Contact', url: 'contact' }
];

const newsAlert = {
  title: 'Newsletter - May 11th, 2020',
  url: '/newsletter_5_11'
};

export default function BaseView(props: {
  active?: string;
  children: React.ReactNode;
}): React.ReactElement {
  if (props.active) {
    sections.filter(
      section => section.title === props.active
    )[0].selected = true;
  }
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header title="RegPep2020" sections={sections} newsAlert={newsAlert} />
      <Container component="main" className={classes.main} maxWidth="lg">
        {props.children}
      </Container>
      <Footer />
    </div>
  );
}
