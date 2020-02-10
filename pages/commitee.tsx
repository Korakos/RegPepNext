import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import BaseView from '../src/BaseView';

export default function Index() {
  return (
    <BaseView>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          TODO Scientific Advisory Commitee
        </Typography>
      </Box>
    </BaseView>
  );
}