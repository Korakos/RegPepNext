import {
  Button,
  Collapse,
  GridList,
  GridListTile,
  TextField,
  Theme
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useState } from 'react';
import BaseView from '../src/BaseView';
import { COLORS } from '../src/constants/color';
import PROGRAM_LIST from '../src/constants/regpepProgramme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paddedView: {
      maxWidth: '100%',
      padding: theme.spacing(2)
    },
    marginHorizontal: {
      margin: theme.spacing(2)
    },
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
    coloredSpaced: {
      color: COLORS.primary,
      padding: theme.spacing(2)
    },
    coloredText: {
      color: COLORS.primary
    }
  })
);

export default function Symposia() {
  const classes = useStyles();
  const [showDay1, setShowDay1] = useState(true);
  const [showDay2, setShowDay2] = useState(true);
  const [showDay3, setShowDay3] = useState(true);
  const [showDay4, setShowDay4] = useState(true);
  const [showDay5, setShowDay5] = useState(true);
  const [openFilter, setOpenFilter] = useState(false);
  const [tempFilter, setTempFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  const inflateProgramme = (event: {
    index: any;
    Day?: string;
    Time?: string;
    Location?: string;
    eCategory?: string;
    eTitle?: string;
    talkTitle?: string;
    firstName?: string;
    lastName?: string;
    Role?: string;
    state?: string;
    Country?: string;
    Institute?: string;
  }) => {
    return (
      <GridListTile key={event.index.toString()} cols={1}>
        <Paper className={classes.gridItem} elevation={6}>
          <Box display="flex" flexDirection="row">
            <Box className={classes.scheduleBox}>
              <Typography
                variant="h4"
                component="h1"
                className={classes.coloredText}
              >
                {event.Day}
              </Typography>
              <Typography variant="body1" component="h2">
                {event.Time}
              </Typography>
              <Typography variant="body1" component="h2">
                {event.Location}
              </Typography>
            </Box>
            <Box className={classes.mainInfoBox}>
              <Typography
                variant="h4"
                component="h1"
                className={classes.coloredText}
              >
                {event.eCategory}
              </Typography>
              <Typography
                variant="h4"
                component="h1"
                className={classes.coloredText}
              >
                {event.eTitle}
              </Typography>
              <Typography variant="h5" component="h2" color="secondary">
                {event.talkTitle}
              </Typography>
              <Typography variant="h5" component="h1">
                {(event.firstName ? event.firstName : '') +
                  ' ' +
                  (event.lastName ? event.lastName : '')}
              </Typography>
              <Typography variant="body1" component="h2">
                {event.Role}
              </Typography>
            </Box>
            <Box className={classes.endInfoBox}>
              <Typography
                variant="h4"
                component="h1"
                className={classes.coloredText}
              >
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

  const toggleDay1 = () => {
    setShowDay1(!showDay1);
  };

  const toggleDay2 = () => {
    setShowDay2(!showDay2);
  };

  const toggleDay3 = () => {
    setShowDay3(!showDay3);
  };

  const toggleDay4 = () => {
    setShowDay4(!showDay4);
  };

  const toggleDay5 = () => {
    setShowDay5(!showDay5);
  };

  const enableAll = () => {
    setShowDay1(true);
    setShowDay2(true);
    setShowDay3(true);
    setShowDay4(true);
    setShowDay5(true);
  };

  const disableAll = () => {
    setShowDay1(false);
    setShowDay2(false);
    setShowDay3(false);
    setShowDay4(false);
    setShowDay5(false);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempFilter(event.target.value.toLowerCase());
  };

  const handleBlurChange = () => {
    setSearchFilter(tempFilter);
  };

  const filteredProgramList = PROGRAM_LIST.filter(item => {
    let valid = false;
    if (showDay1 && item.Day === '9.18') {
      valid = true;
    }
    if (showDay2 && item.Day === '9.19') {
      valid = true;
    }
    if (showDay3 && item.Day === '9.20') {
      valid = true;
    }
    if (showDay4 && item.Day === '9.21') {
      valid = true;
    }
    if (showDay5 && item.Day === '9.22') {
      valid = true;
    }
    if (searchFilter && valid) {
      if (item.eCategory) {
        if (item.eCategory!.toLowerCase().includes(searchFilter)) {
          return true;
        }
      }
      if (item.eTitle) {
        if (item.eTitle!.toLowerCase().includes(searchFilter)) {
          return true;
        }
      }
      if (item.talkTitle) {
        if (item.talkTitle!.toLowerCase().includes(searchFilter)) {
          return true;
        }
      }
      if (item.firstName) {
        if (item.firstName!.toLowerCase().includes(searchFilter)) {
          return true;
        }
      }
      if (item.lastName) {
        if (item.lastName!.toLowerCase().includes(searchFilter)) {
          return true;
        }
      }
      return false;
    }
    return valid;
  });

  return (
    <BaseView>
      <Box my={4}>
        <Button
          color="primary"
          endIcon={openFilter ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          onClick={() => {
            setOpenFilter(!openFilter);
          }}
        >
          Filter Program
        </Button>
        <Collapse in={openFilter}>
          <Box flexDirection="row">
            <Button
              variant={showDay1 ? 'contained' : 'outlined'}
              onClick={toggleDay1}
              color="primary"
              className={classes.marginHorizontal}
            >
              Day 1
            </Button>
            <Button
              variant={showDay2 ? 'contained' : 'outlined'}
              onClick={toggleDay2}
              color="primary"
              className={classes.marginHorizontal}
            >
              Day 2
            </Button>
            <Button
              variant={showDay3 ? 'contained' : 'outlined'}
              onClick={toggleDay3}
              color="primary"
              className={classes.marginHorizontal}
            >
              Day 3
            </Button>
            <Button
              variant={showDay4 ? 'contained' : 'outlined'}
              onClick={toggleDay4}
              color="primary"
              className={classes.marginHorizontal}
            >
              Day 4
            </Button>
            <Button
              variant={showDay5 ? 'contained' : 'outlined'}
              onClick={toggleDay5}
              color="primary"
              className={classes.marginHorizontal}
            >
              Day 5
            </Button>
            <Button
              onClick={enableAll}
              color="primary"
              className={classes.marginHorizontal}
            >
              Enable All
            </Button>
            <Button
              onClick={disableAll}
              color="primary"
              className={classes.marginHorizontal}
            >
              Disable All
            </Button>
          </Box>
          <Box className={classes.paddedView}>
            <TextField
              label="search"
              onChange={handleSearchChange}
              onBlur={handleBlurChange}
            />
          </Box>
        </Collapse>

        <Typography
          variant="h2"
          component="h1"
          className={classes.coloredSpaced}
        >
          Program
        </Typography>
        <GridList cellHeight="auto" className={classes.gridList} cols={1}>
          {filteredProgramList.map(inflateProgramme)}
        </GridList>
      </Box>
    </BaseView>
  );
}
