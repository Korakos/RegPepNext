import {
    Button,
    createStyles,
    Link,
    makeStyles,
    Theme
} from '@material-ui/core';
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
      width: '130%',
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

const HOTEL_MASTER_LIST = [
  {
    groupName: 'Mundo Imperial Hotels',
    key: 'a',
    description: 'Top class hotels with available transportation to the venue',
    hotelList: [
      {
        key: '1',
        name: 'Princess Mundo Imperial',
        descripcion: `The official hotel of RegPep23. Located on scenic Revolcadero Beach, this hotel features an
      on-site golf course and rooms with a private balcony or patio and 
      floor-to-ceiling windows. Aeropuerto Internacional de Acapulco is a 
      17-minute drive away.`,
        picture: '/princess_hotel.jpg',
        link:
          'https://reservations.travelclick.com/102415?groupID=2745053#/guestsandrooms',
        bigLink: true
      },
      {
        key: '2',
        name: 'Palacio Mundo Imperial',
        tInstructions: 'Free shuttle bus, 5-10 min driving distance',
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
        tInstructions: '10 min waking distance by the beach',
        descripcion: `Set in tropical gardens, this impressive resort is located 
      on Acapulco’s Revolcadero Beach. It is a completely smoke-free, and 
      offers a fitness centre, spa, tennis court and a large outdoor pool 
      with a waterfall.`,
        picture: '/Pierre-9.jpg',
        link:
          'https://www.booking.com/hotel/mx/pierre-mundo-imperial.en-gb.html'
      }
    ]
  },
  {
    groupName: 'Low Cost Hotels',
    key: 'b',
    description: 'Recommended by the LOC, 10 - 15 min walking distance.',
    hotelList: [
      {
        key: '1',
        name: 'Hotel Villamar Princesa suite',
        descripcion: `Hotel Villamar Princesa Suites include a dining area and seating area. The kitchenettes are equipped with a refrigerator. The suites have a balcony with views of the garden.`,
        picture: '/villamar.jpg',
        link:
          'https://www.booking.com/hotel/mx/villamar-princesa-suites.html?aid=378266;label=bdot-kuUefSr0koVoolcK4inwyQS267778093357%3Apl%3Ata%3Ap1%3Ap22%2C653%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3346771808%3Alp1010042%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YYriJK-Ikd_dLBPOo0BdMww;sid=cd7bee0a4476ea9308e21122e6c67d8a;atlas_src=sr_iw_btn;checkin=2020-03-06;checkout=2020-03-07;dest_id=0;dest_type=landmark;dist=0;group_adults=2;group_children=0;highlighted_blocks=27633304_211922269_2_0_0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&'
      },
      {
        key: '2',
        name: 'Villas Sol Diamante',
        descripcion: `Located in Acapulco, Villas Sol Diamante offers an outdoor swimming pool, free WiFi access and free private on-site parking.

        Each air-conditioned room here will provide you with a cable TV, a balcony and a private bathroom with a shower. You can enjoy pool view and garden view from the room.`,
        picture: '/villas_sol.jpg',
        link: 'http://www.booking.com/Share-3xFe5P'
      }
    ]
  }
];
const renderHotel = (hotelInfo: {
  key: string | number | undefined;
  name: React.ReactNode;
  tInstructions?: string;
  descripcion: React.ReactNode;
  picture: string | undefined;
  link?: string | undefined;
  bigLink?: boolean;
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
            {hotelInfo.tInstructions}
          </Typography>
          <Typography variant="body1" component="h1" gutterBottom>
            {hotelInfo.descripcion}
          </Typography>
          {hotelInfo.link ? (
            hotelInfo.bigLink ? (
              <Button
                variant="contained"
                color="primary"
                size="large"
                href={hotelInfo.link}
              >
                Book a room
              </Button>
            ) : (
              <Typography variant="body1" component="h1" gutterBottom>
                <br />
                <Link href={hotelInfo.link}>
                  <b>Book a room</b>
                </Link>
              </Typography>
            )
          ) : (
            ''
          )}
        </Box>
      </Box>
      <Box className={(classes.fullSize, classes.paddedVertical)}>
        <img src={hotelInfo.picture} className={classes.centeredImage} />
      </Box>
    </Box>
  );
};

const renderGroup = (groupInfo: {
  key: string;
  groupName: React.ReactNode;
  bookingLink?: string | undefined;
  description: string | undefined;
  hotelList: {
    key: string | number | undefined;
    name: React.ReactNode;
    descripcion: React.ReactNode;
    picture: string | undefined;
    link?: string | undefined;
  }[];
}) => {
  const classes = useStyles();
  return (
    <Box key={groupInfo.key}>
      <Box className={classes.paddedBox}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          className={classes.coloredText}
        >
          {groupInfo.groupName}
        </Typography>
        <Typography variant="body1" component="h1" gutterBottom>
          {groupInfo.description}
        </Typography>
        {groupInfo.bookingLink ? (
          <Button
            variant="contained"
            color="primary"
            size="large"
            href={groupInfo.bookingLink}
          >
            Book Rooms
          </Button>
        ) : (
          ''
        )}
      </Box>

      {groupInfo.hotelList.map(renderHotel)}
    </Box>
  );
};

export default function Travel() {
  const classes = useStyles();

  return (
    <BaseView>
      <Box my={4}>
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
          {HOTEL_MASTER_LIST.map(renderGroup)}
        </Box>
      </Box>
    </BaseView>
  );
}
