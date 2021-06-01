import { createStyles, makeStyles, Theme, Link } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import BaseView from '../src/BaseView';
import { COLORS } from '../src/constants/color';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paddedView: {
      maxWidth: '100%',
      padding: theme.spacing(2)
    },
    coloredText: {
      color: COLORS.primary
    }
  })
);

export default function RegisterNow() {
  const classes = useStyles();
  return (
    <BaseView>
      <Box my={4}>
        <Box className={classes.paddedView}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            className={classes.coloredText}
          >
            Confirmed Speakers
          </Typography>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            className={classes.paddedView}
          >
            Click the following link to download the list of confirmed speakers
          </Typography>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            className={classes.paddedView}
          >
            <Link href="/23rd_RegPep_confirmed_speakers_rev_5.pdf">Download PDF</Link>
          </Typography>
        </Box>
      </Box>
    </BaseView>
  );
}