import { createStyles, Link, makeStyles, Theme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import BaseView from '../src/BaseView';
import { COLORS } from '../src/constants/color';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paddedView: {
      maxWidth: '100%',
      padding: theme.spacing(4)
    },
    fullSize: {
      width: '100%'
    },
    centeredImage: {
      maxWidth: '140%',
      position: 'relative',
      right: '14.3%',
      WebkitBoxShadow: '0px 5px 15px 0px rgba(0,0,0,0.75)',
      MozBoxShadow: '0px 5px 15px 0px rgba(0,0,0,0.75)',
      boxShadow: '0px 5px 15px 0px rgba(0,0,0,0.75)'
    },
    coloredText: {
      color: COLORS.primary
    }
  })
);

export default function Index() {
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
            Venue
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            className={classes.coloredText}
          >
            Hotel Princess Mundo Imperial
          </Typography>
          <Typography
            variant="body2"
            component="h1"
            gutterBottom
            className={classes.paddedView}
          >
            <Box>Av. Costera de las Palmas</Box>
            <Box>Granjas del Marqués</Box>
            <Box>39887</Box>
            <Box>Acapulco de Juárez</Box>
            <Box>Guerrero</Box>
            <Box>Mexico</Box>
          </Typography>
        </Box>
        <Box className={classes.fullSize}>
          <img src="/princess_2.jpg" className={classes.centeredImage} />
        </Box>
        <Typography
          variant="body1"
          component="h1"
          gutterBottom
          className={classes.paddedView}
        >
          Blessed by warm waters and sunshine 365 days a year, gorgeous beaches,
          a scenery of unrivaled beauty, and hospitable, friendly people,
          Acapulco offers a casual, relaxed atmosphere. It has one of the most
          stunning bay views offered by any coastal resort. The newer Acapulco
          Diamante area situated from Puerto Marques Bay to Revolcadero Beach
          offers first-class resorts, residential developments, modern shopping
          malls, 4 spectacular 18-holes golf courses, and one of kind tourist
          complex offering relaxation, business, entertainment and wellbeing,
          all in a single destination with a luxurious hotel, an spa, an
          avant-garde performance and entertainment venue, and a modern
          Convention and Exposition Center
        </Typography>

        <Typography
          variant="body1"
          component="h1"
          gutterBottom
          className={classes.paddedView}
        >
          Find out more by downloading the official guide here:{' '}
          <Link href="/TouristGuide.pdf">Download PDF</Link>
        </Typography>
      </Box>
    </BaseView>
  );
}
