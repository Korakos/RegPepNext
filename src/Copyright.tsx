import MuiLink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import React from 'react';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="/">
        RegPep
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
