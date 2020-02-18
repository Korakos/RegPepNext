import { GridList, GridListTile, Theme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import BaseView from '../src/BaseView';
import { COLORS } from '../src/constants/color';
import PROGRAM_LIST from '../src/constants/regpepProgramme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridList: {
      width: '100%',
      height: '100%',
      padding: theme.spacing(2),
      justifyContet: 'center'
    },
    gridItem: {
      margin: theme.spacing(2),
      height: 'auto'
    },
    scheduleBox: {
      padding: theme.spacing(2),
      flex: 1
    },
    mainInfoBox: {
      padding: theme.spacing(2),
      flex: 5
    },
    endInfoBox: {
      padding: theme.spacing(2),
      flex: 2
    },
    coloredText: {
      color: COLORS.primary,
      padding: theme.spacing(2)
    }
  })
);

export default function Symposia() {
  const classes = useStyles();

  const inflateProgramme = (event: {
    index: any;
    Day?: string;
    Time?: string;
    eTitle?: string;
    talkTitle?: string;
    firstName?: string;
    lastName?: string;
    state?: string;
    Country?: string;
    Institute?: string;
  }) => {
    return (
      <GridListTile key={event.index.toString()} cols={1}>
        <Paper className={classes.gridItem} elevation={6}>
          <Box display="flex" flexDirection="row">
            <Box className={classes.scheduleBox}>
              <Typography variant="h4" component="h1">
                {event.Day}
              </Typography>
              <Typography variant="body1" component="h2">
                {event.Time}
              </Typography>
            </Box>
            <Box className={classes.mainInfoBox}>
              <Typography variant="h4" component="h1">
                {event.eTitle}
              </Typography>
              <Typography variant="body1" component="h2">
                {event.talkTitle ? event.talkTitle : <br />}
              </Typography>
              <Typography variant="h4" component="h1">
                {(event.firstName ? event.firstName : '') +
                  ' ' +
                  (event.lastName ? event.lastName : '')}
              </Typography>
            </Box>
            <Box className={classes.endInfoBox}>
              <Typography variant="h4" component="h1">
                {(event.state ? event.state + ', ' : '') +
                  (event.Country ? event.Country : '')}
              </Typography>
              <Typography variant="body1" component="h2">
                {event.Institute ? event.Institute : ''}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </GridListTile>
    );
  };

  return (
    <BaseView>
      <Box>
        <Typography variant="h2" component="h1" className={classes.coloredText}>
          Programme
        </Typography>
        <GridList cellHeight="auto" className={classes.gridList} cols={1}>
          {PROGRAM_LIST.map(inflateProgramme)}
        </GridList>
      </Box>
    </BaseView>
  );
}
