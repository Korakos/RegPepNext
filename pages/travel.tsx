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
    paddedVertical: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(8)
    },
    paddedBox: {
      padding: theme.spacing(2)
    },
    noBottomPadding: {
      padding: theme.spacing(2),
      paddingBottom: 0
    },
    hotelDataBox: {
      padding: theme.spacing(2)
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

const HOTEL_LIST = [
  {
    key: '1',
    name: 'Princess Mundo Imperial',
    descripcion: `Located on scenic Revolcadero Beach, this hotel features an
    on-site golf course and rooms with a private balcony or patio and 
    floor-to-ceiling windows. Aeropuerto Internacional de Acapulco is a 
    17-minute drive away.`,
    picture: '/princess_hotel.jpg',
    link: 'https://www.booking.com/hotel/mx/princess-mundo-imperial.en-gb.html'
  },
  {
    key: '2',
    name: 'Palacio Mundo Imperial',
    descripcion: `Located in the heart of Acapulco's exclusive Diamante
    district, this luxury resort offers guests lavish amenities and activities
    such as spa services, world-class dining and state-of-the-art 
    entertainment.`,
    picture: '/palacio_main.jpg',
    link:
      'https://www.booking.com/hotel/mx/the-resort-at-mundo-imperial.en-gb.html'
  },
  {
    key: '3',
    name: 'Pierre Mundo Imperial',
    descripcion: `Set in tropical gardens, this impressive resort is located 
    on Acapulco’s Revolcadero Beach. It is a completely smoke-free, and 
    offers a fitness centre, spa, tennis court and a large outdoor pool 
    with a waterfall.`,
    picture: '/Pierre-9.jpg',
    link: 'https://www.booking.com/hotel/mx/pierre-mundo-imperial.en-gb.html'
  }
];

const renderHotel = (hotelInfo: {
  key: string | number | undefined;
  name: React.ReactNode;
  descripcion: React.ReactNode;
  picture: string | undefined;
  link: string;
}) => {
  const classes = useStyles();
  return (
    <Box key={hotelInfo.key}>
      <Box className={classes.paddedHorizontal}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          className={classes.coloredText}
        >
          {hotelInfo.name}
        </Typography>
        <Box className={classes.hotelDataBox}>
          <Typography variant="body1" component="h1" gutterBottom>
            {hotelInfo.descripcion}
          </Typography>
          <Typography variant="body1" component="h1" gutterBottom>
            <br />
            <Link href={hotelInfo.link}>
              <b>Book a room</b>
            </Link>
          </Typography>
        </Box>
      </Box>
      <Box className={(classes.fullSize, classes.paddedVertical)}>
        <img src={hotelInfo.picture} className={classes.centeredImage} />
      </Box>
    </Box>
  );
};

export default function Travel() {
  const classes = useStyles();

  return (
    <BaseView>
      <Box my={4}>
        <Box>
          <Box className={classes.paddedBox}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              className={classes.coloredText}
            >
              Travel
            </Typography>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              className={classes.coloredText}
            >
              How to get there
            </Typography>
            <Typography variant="body1" component="h1" gutterBottom>
              Fly in to Acapulco international airport... gg easy TODO
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box className={classes.noBottomPadding}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              className={classes.coloredText}
            >
              Accomodation
            </Typography>
          </Box>
          {HOTEL_LIST.map(renderHotel)}
        </Box>
      </Box>
    </BaseView>
  );
}
