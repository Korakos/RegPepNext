import React from 'react';
import BaseView from '../src/BaseView';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/Link';

export default function About() {
  return (
    <BaseView>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          hmmmm
        </Typography>
        <Link href="/">Go to the Main page</Link>
      </Box>
    </BaseView>
  );
}
