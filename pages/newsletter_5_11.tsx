import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
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
    },
    centeredView: {
      maxWidth: '100%',
      padding: theme.spacing(2),
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
);

export default function newsletter() {
  const classes = useStyles();
  return (
    <BaseView>
      <Box my={4}>
        <Box className={classes.paddedView}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            className={classes.coloredText}
          >
            E-Letter from RegPep23 Chair and IRPS-Presidents - May 11th, 2020
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.paddedView}
          >
            Dear colleagues/RegPep23 confirmed speakers:
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.paddedView}
          >
            It has been 8 weeks since we last wrote to you - we wish you and
            your family and loved ones safety and health.
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            className={classes.paddedView}
          >
            As we all see every day, the world has changed due to COVID19 - our
            society faces tough political and economic and even societal
            challenges, due to the public health threat of coronavirus. At this
            historic moment, we need collective, well considered prospective,
            emerging from the international scientific community, to develop new
            approaches to preparing ourselves and our students, to face an
            uncertain future. At the same time, more important than ever, we
            need to continue our academic and scientific endeavor even under
            these difficult circumstances.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.paddedView}
          >
            The RegPep23 LOC and IRPS council continue to monitor the COVID19
            situation worldwide and locally with Mexican government health and
            science authorities, and at the present, we continue to plan and
            move forward with the RegPep23, the 23nd Biennial Meeting.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.paddedView}
          >
            As the reopening of Mexico is planned currently for June 1st, we
            have extended the speaker confirmation and early-bird registration
            to 10th of June 2020, and have also extended the deadline for travel
            award applications.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.paddedView}
          >
            We understand that there may be government/university restrictions
            on travel specific to individual countries/universities, and that a
            rational plan for convening our meeting that puts a premium on
            safety is expected as well. We remain hopeful that travel
            restrictions will ease over the summer for a significant portion of
            our confirmed speakers, in particular for September. If the meeting
            will be held as planned, we remain committed to set infrastructure
            for social distancing and medical/testing services - we will be
            communicating the details in the coming weeks.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.paddedView}
          >
            If we are forced to cancel the meeting after the confirmation
            deadline, due to government or health restrictions, the registered
            delegates will receive a reimbursement of your deposit.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.paddedView}
          >
            We thank you for your engagement with the RegPep community and look
            forward to seeing you in September.
          </Typography>
          <Box className={classes.centeredView}>
            <Box className={classes.paddedView}>
              <Typography variant="body1">Very best regards,</Typography>
            </Box>
            <Box className={classes.paddedView}>
              <Typography variant="body1" className={classes.coloredText}>
                Ruud Buijs
              </Typography>
              <Typography variant="body1">Chair, RegPep23</Typography>
            </Box>
            <Box className={classes.paddedView}>
              <Typography variant="body1" className={classes.coloredText}>
                Lee Eiden and Limei Zhang
              </Typography>
              <Typography variant="body1">
                Co-Presidents of IRPS and RegPep23 ex-officio Co-Chairs
              </Typography>
            </Box>
            <Box className={classes.paddedView}>
              <Typography variant="body2" color="secondary">
                International Regulatory Peptide Society (IRPS)
              </Typography>
              <Typography variant="body2" color="secondary">
                Email: secretariat@irps-regpep.org
              </Typography>
              <Typography variant="body2" color="secondary">
                URL: regpep.org
              </Typography>
            </Box>
            <Box className={classes.paddedView}>
              <Typography variant="body2" color="secondary">
                23rd International Symposium on Regulatory Peptides (RegPep23)
              </Typography>
              <Typography variant="body2" color="secondary">
                Email: regpep2020@unam.mx
              </Typography>
              <Typography variant="body2" color="secondary">
                URL: RegPep23.unam.mx
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </BaseView>
  );
}
