import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import BaseView from '../src/BaseView';

export default function Abstract() {
  return (
    <BaseView>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          TODO abstract subimission site
        </Typography>
        <Button variant="contained" color="primary">
          Send Abstract
        </Button>
      </Box>
    </BaseView>
  );
}
