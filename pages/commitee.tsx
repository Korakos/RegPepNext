import {
  Avatar,
  Collapse,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import BaseView from '../src/BaseView';
import { COLORS } from '../src/constants/color';
import COMMITEE_MEMBERS from '../src/constants/commitee';

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
  const [members, setMembers] = useState(COMMITEE_MEMBERS);
  const classes = useStyles();

  const memberDetails = (key: string) => {
    const tempMembers = JSON.parse(JSON.stringify(members));
    const foundMember = tempMembers.find((member: { key: string }) => {
      return member.key === key;
    });
    if (foundMember) {
      foundMember.expand = !foundMember.expand;
    }
    setMembers(tempMembers);
  };

  const inflateMember = (member: {
    key: string;
    avatar: string;
    name: string;
    title: string;
    institution: string;
    details?: string;
    expand?: boolean;
  }) => {
    const { key, avatar, name, title, institution, details, expand } = member;
    return (
      <Box key={key}>
        <ListItem button onClick={() => memberDetails(key)}>
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
        <Collapse in={expand}>
          <Paper elevation={4} className={classes.paddedView}>
            <Typography component="h1" variant="body1" color="textPrimary">
              {details}
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
          <Typography variant="h3" component="h1" gutterBottom>
            Scientific Advisory Commitee
          </Typography>
          <List>{members.map(inflateMember)}</List>
        </Box>
      </Box>
    </BaseView>
  );
}
