import { createStyles, Link, makeStyles, Theme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import BaseView from '../src/BaseView';
import { COLORS } from '../src/constants/color';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paddedHorizontal: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    imageDataBox: {
      padding: theme.spacing(2)
    },
    fullSize: {
      width: '100%'
    },
    paddedVertical: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(8)
    },
    centeredImage: {
      width: '130%',
      position: 'relative',
      right: '14.3%',
      WebkitBoxShadow: '0px 5px 15px 0px rgba(0,0,0,0.75)',
      MozBoxShadow: '0px 5px 15px 0px rgba(0,0,0,0.75)',
      boxShadow: '0px 5px 15px 0px rgba(0,0,0,0.75)'
    },
    paddedView: {
      maxWidth: '100%',
      padding: theme.spacing(2)
    },
    coloredText: {
      color: COLORS.primary
    }
  })
);

export default function Program() {
  const classes = useStyles();
  return (
    <BaseView>
      <Box my={4}>
        <Box className={classes.paddedHorizontal}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            className={classes.coloredText}
          >
            Virtual Meeting Program
          </Typography>
        </Box>
        <Box className={(classes.fullSize, classes.paddedVertical)}>
          <img src="RegPep23_virtual_f2f_program_proofread.jpg" className={classes.centeredImage} />
        </Box>
        <Box className={classes.paddedHorizontal}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            className={classes.coloredText}
          >
            In Person Meeting Program
          </Typography>
        </Box>
        <Box className={(classes.fullSize, classes.paddedVertical)}>
          <img src="/RegPep23_f2f_program_proofread.jpg" className={classes.centeredImage} />
        </Box>
        <Box className={classes.paddedView}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            className={classes.coloredText}
          >
            Scientific Program
          </Typography>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            className={classes.paddedView}
          >
            Click the following link to download the scientific program
          </Typography>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            className={classes.paddedView}
          >
            <Link href="/23rd_RegPep_pre_final_program.pdf">Download PDF</Link>
          </Typography>
        </Box>
      </Box>
    </BaseView>
  );
}