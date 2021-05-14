import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Copyright from './Copyright';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[800]
        : theme.palette.grey[300]
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body1">23rd RegPep</Typography>
        <Typography variant="body2">
          contact us at 23rd RegPep@unam.mx
        </Typography>
        <Typography variant="body2">last updated: 2/29/2020</Typography>
        <Copyright />
      </Container>
    </footer>
  );
}
