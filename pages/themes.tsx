import {
  Avatar,
  Collapse,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import BaseView from '../src/BaseView';
import { COLORS } from '../src/constants/color';
import PLENNARY_SPEAKERS from '../src/constants/plenary';

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
      maxWidth: '140%',
      position: 'relative',
      right: '20%'
    },
    coloredText: {
      color: COLORS.primary
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10)
    }
  })
);

export default function Themes() {
  const [speakers, setSpeakers] = useState(PLENNARY_SPEAKERS);
  const classes = useStyles();

  const speakerDetails = (key: string) => {
    const tempSpeakers = JSON.parse(JSON.stringify(speakers));
    const foundSpeaker = tempSpeakers.find((speaker: { key: string }) => {
      return speaker.key === key;
    });
    if (foundSpeaker) {
      foundSpeaker.expand = !foundSpeaker.expand;
    }
    setSpeakers(tempSpeakers);
  };

  const inflateSpeaker = (speaker: {
    key: string;
    avatar: string;
    name: string;
    event: string;
    title: string;
    institution: string;
    description?: string;
    expand?: boolean;
  }) => {
    const {
      key,
      avatar,
      name,
      event,
      title,
      institution,
      description,
      expand
    } = speaker;
    return (
      <Box key={key}>
        <ListItem button onClick={() => speakerDetails(key)}>
          <ListItemAvatar>
            <Avatar alt={name} src={avatar} className={classes.large} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography component="span" variant="h5" color="primary">
                  {event}
                  <br />
                </Typography>
                <Typography component="span" variant="h4" color="primary">
                  {name}
                </Typography>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography component="span" variant="h5">
                  {title}
                  <br />
                </Typography>
                <Typography component="span" variant="body1">
                  {institution}
                </Typography>
              </React.Fragment>
            }
            className={classes.paddedView}
          />
        </ListItem>
        <Collapse in={expand}>
          <Paper elevation={4} className={classes.paddedView}>
            <Typography component="h1" variant="body1" color="textPrimary">
              {description}
            </Typography>
          </Paper>
        </Collapse>
      </Box>
    );
  };

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
            23rd RegPep Themes
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            className={classes.coloredText}
          >
            UNDER CONSTRUCTION
          </Typography>
          {/* <List>{speakers.map(inflateSpeaker)}</List> */}
        </Box>
      </Box>
    </BaseView>
  );
}
