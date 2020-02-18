import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
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
    fullSize: {
      width: '100%'
    },
    centeredImage: {
      maxWidth: '100%'
    },
    coloredText: {
      color: COLORS.primary
    },
    attractionContainer: {
      paddingBottom: theme.spacing(6)
    }
  })
);

export default function Tours() {
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
            Local Attractions
          </Typography>
          <Box className={classes.attractionContainer}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              className={classes.coloredText}
            >
              XTASEA
            </Typography>
            <Typography
              variant="body1"
              component="h1"
              gutterBottom
              className={classes.paddedView}
            >
              Offering &quot;The world&apos;s longest over-sea zip line&quot;.
              <Link href="http://www.xtasea.mx/en/experiencia.aspx">
                {' '}
                www.xtasea.mx
              </Link>
            </Typography>
            <Box className={classes.fullSize}>
              <img src="/xtasea.jpg" className={classes.centeredImage} />
            </Box>
          </Box>
          <Box>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              className={classes.coloredText}
            >
              Potro Viajes
            </Typography>
            <Typography
              variant="body1"
              component="h1"
              gutterBottom
              className={classes.paddedView}
            >
              Offers &quot;Guided tours through the city, sport fishing, diving
              spectacle, diving , and Historic Tours&quot;. Please ask for
              information with the concierge
            </Typography>
          </Box>
        </Box>
      </Box>
    </BaseView>
  );
}
