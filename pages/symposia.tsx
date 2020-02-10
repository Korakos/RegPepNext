import { GridList, GridListTile } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import BaseView from '../src/BaseView';

const useStyles = makeStyles(() =>
  createStyles({
    gridList: {
      maxWidth: '100rem',
      width: '90%',
      height: 'auto',
      padding: 30,
      justifyContet: 'center'
    },
    gridItem: {
      maxWidth: '16rem',
      padding: 20
    }
  })
);

const symposiaList = [
  {
    key: '1',
    title: 'Simposia',
    time: '8:00am-9:30am',
    speaker: 'Lee. E. Eiden'
  },
  {
    key: '2',
    title: 'Simposia',
    time: '8:00am-9:30am',
    speaker: 'Lee. E. Eiden'
  },
  {
    key: '3',
    title: 'Simposia',
    time: '8:00am-9:30am',
    speaker: 'Lee. E. Eiden'
  },
  {
    key: '4',
    title: 'Simposia',
    time: '8:00am-9:30am',
    speaker: 'Lee. E. Eiden'
  },
  {
    key: '5',
    title: 'Simposia',
    time: '8:00am-9:30am',
    speaker: 'Lee. E. Eiden'
  },
  {
    key: '6',
    title: 'Simposia',
    time: '8:00am-9:30am',
    speaker: 'Lee. E. Eiden'
  },
  {
    key: '7',
    title: 'Simposia',
    time: '8:00am-9:30am',
    speaker: 'Lee. E. Eiden'
  },
  {
    key: '8',
    title: 'Simposia',
    time: '8:00am-9:30am',
    speaker: 'Lee. E. Eiden'
  },
  {
    key: '9',
    title: 'Simposia',
    time: '8:00am-9:30am',
    speaker: 'Lee. E. Eiden'
  },
  {
    key: '10',
    title: 'Simposia',
    time: '8:00am-9:30am',
    speaker: 'Lee. E. Eiden'
  },
  {
    key: '11',
    title: 'Simposia',
    time: '8:00am-9:30am',
    speaker: 'Lee. E. Eiden'
  }
];

export default function Index() {
  const classes = useStyles();

  return (
    <BaseView>
      <Box>
        <GridList cellHeight={200} className={classes.gridList} cols={3}>
          {symposiaList.map(symposia => (
            <GridListTile key={symposia.key} cols={1}>
              <Paper className={classes.gridItem} elevation={6}>
                <Typography variant="h4" component="h1">
                  {symposia.title}
                </Typography>
                <Typography variant="body1" component="h2">
                  {symposia.time}
                </Typography>
                <Typography variant="h4" component="h1">
                  {symposia.speaker}
                </Typography>
              </Paper>
            </GridListTile>
          ))}
        </GridList>
      </Box>
    </BaseView>
  );
}
