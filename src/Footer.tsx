import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Copyright from './Copyright';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  },
}));

export default function Footer() {
  const classes = useStyles();

    return (
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">RegPep2020</Typography>
          <Copyright />
        </Container>
      </footer>
    );
}