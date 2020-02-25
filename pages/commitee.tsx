import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import BaseView from '../src/BaseView';
import { COLORS } from '../src/constants/color';
import { COMMITEE_MEMBERS, LOC_MEMBERS } from '../src/constants/commitee';

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

export default function Commitee() {
  const locMembers = LOC_MEMBERS;
  const members = COMMITEE_MEMBERS;
  const classes = useStyles();

  const inflateMember = (member: {
    key: string;
    avatar: string;
    name: string;
    title: string;
    institution: string;
    details?: string;
    expand?: boolean;
  }) => {
    const { key, avatar, name, title, institution } = member;
    return (
      <Box key={key}>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt={name} src={avatar} className={classes.large} />
          </ListItemAvatar>
          <ListItemText
            primary={name}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  {title} <br /> {institution}
                </Typography>
              </React.Fragment>
            }
            className={classes.paddedView}
          />
        </ListItem>
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
            Local Organizing Commitee
          </Typography>
          <List>{locMembers.map(inflateMember)}</List>
        </Box>
        <Box className={classes.paddedView}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            className={classes.coloredText}
          >
            Scientific Program Commitee
          </Typography>
          <List>{members.map(inflateMember)}</List>
        </Box>
      </Box>
    </BaseView>
  );
}
