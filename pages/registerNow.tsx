import { createStyles, makeStyles, Theme } from '@material-ui/core';
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
            Register Now!
          </Typography>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            className={classes.paddedView}
          >
            Featuring 6 plenary lectures, 1 plenary symposium on “Current Topics
            of Regultory peptides”, 20 parallel symposia, the RegPep2020 aims to
            bring together experts and students in all fields of regulatory
            peptides in systems biology.
          </Typography>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            className={classes.paddedView}
          >
            RegPep2020 is now accepting registration and abstract submission.
          </Typography>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            color="secondary"
            className={classes.paddedView}
          >
            Abstract submission for contributed talks selection and travel
            awards: March 30, 2020
          </Typography>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            color="secondary"
            className={classes.paddedView}
          >
            Early bird registration: March 30, 2020
          </Typography>
          <Button variant="contained" color="primary">
            Register Now
          </Button>
        </Box>
      </Box>
    </BaseView>
  );
}
