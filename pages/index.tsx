import React from 'react';
import BaseView from '../src/BaseView';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/Link';

export default function Index() {
  return (
    <BaseView>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          This is the main page
        </Typography>
        <Link href="about">Go to the about page</Link>
      </Box>
    </BaseView>
  );
}
