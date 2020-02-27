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
            Featuring 6 keynote lectures, Plenary session on &quot;Current
            Topics in Regulatory Peptides&quot;, 20 parallel sessions, dialogue
            sessions with journal editors-in-chief/editors and eminent pioneers
            in peptide research, RegPep2020 aims to bring together experts and
            students in all fields of regulatory peptide systems biology.
          </Typography>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            className={classes.paddedView}
          >
            RegPep2020 is now accepting registration and abstract submission.
          </Typography>
          <Box className={classes.paddedView}>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              color="secondary"
            >
              Abstract submission for contributed talks selection and travel
              awards*: March 30, 2020
            </Typography>
            <Typography variant="body1" component="h1" gutterBottom>
              * Travel awards include free accommodations and competition for
              special prizes conferred by Distinguished Members, and recognizing
              research excellence.
            </Typography>
          </Box>
          <Box className={classes.paddedView}>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              color="secondary"
            >
              Early bird registration**: March 30, 2020
            </Typography>
            <Typography variant="body1" component="h1" gutterBottom>
              ** Registration fee include: abstract submission; welcome
              reception; name badge; printed program and abstract book of
              RegPep2020; participation in all scientific sessions; access code
              for video streaming of all conference sessions during the meeting
              and for three weeks following RegPep2020; three lunches.
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            href="http://www.regpep.org/international-regulatory-peptide-society/regpep-2020/"
          >
            Register Now
          </Button>
        </Box>
      </Box>
    </BaseView>
  );
}
