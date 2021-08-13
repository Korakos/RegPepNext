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
        <Box className={classes.paddedView}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            className={classes.coloredText}
          >
            RegPep23 Proceedings
          </Typography>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            className={classes.paddedView}
          >
            Click the following link to download the proceedings
          </Typography>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            className={classes.paddedView}
          >
            <Link href="/RegPep23_Proceedings_v_11.01_C1.pdf">Download PDF</Link>
          </Typography>
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