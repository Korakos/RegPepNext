import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import BaseView from '../src/BaseView';

export default function Keynote() {
  return (
    <BaseView>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          TODO Keynote Speakers
        </Typography>
      </Box>
    </BaseView>
  );
}
