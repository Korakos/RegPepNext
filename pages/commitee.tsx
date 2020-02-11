import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import BaseView from '../src/BaseView';
import { COLORS } from '../src/constants/color';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';

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
      height: theme.spacing(10),
    },
  })
);

const members = [
  {
    key: '1', avatar: '/buijs1.jpg', name: 'Ruud M. Buijs', title: 'Chair, RegPep2020', institution: 'UNAM, Mexico'
  },
  {
    key: '2.1', avatar: '/lee.png', name: 'Lee E. Eiden', title: 'ex-officio – Co-Presidents of IRPS', institution: 'NIMH, USA'
  },
  {
    key: '2.2', avatar: '/limei.png', name: 'Limei Zhang', title: 'ex-officio – Co-Presidents of IRPS', institution: 'UNAM, Mexico'
  },
  {
    key: '3', avatar: '', name: 'Aimin Bao', title: '', institution: 'Uni. Zhejiang, China'
  },
  {
    key: '4', avatar: '', name: 'Luis de Lecea', title: '', institution: 'Uni. Stanford, USA'
  },
  {
    key: '5', avatar: '/valery.jpg', name: 'Valery Grinevich', title: '', institution: 'Uni. Heidelberg, Germany'
  },
  {
    key: '6', avatar: '/gundlach.png', name: 'Andrew Gundlach', title: '', institution: 'Florey Inst, Australia'
  },
  {
    key: '7', avatar: '', name: 'Gareth Leng', title: '', institution: 'Uni. Edinburgh, UK'
  },
  {
    key: '8', avatar: '', name: 'Gil Lewkowitz', title: '', institution: 'Weizmann Institute, Israel'
  },
  {
    key: '9', avatar: '/mecawi.jpg', name: 'André S. Mecawi', title: '', institution: 'Uni. Sao Paolo, Brazil'
  },
  {
    key: '10', avatar: '', name: 'Robert (Bob) Millar', title: '', institution: 'Uni. Pretoria, South Africa'
  }
];

export default function Index() {
  const classes = useStyles();

  const inflateMember = (member: { key: any; avatar: any; name: any; title: any; institution: any; }) => {
    let { key, avatar, name, title, institution } = member;
    return (
      <ListItem button key={key}>
        <ListItemAvatar>
          <Avatar alt={name} src={avatar} className={classes.large} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                component="h1"
                variant="body2"
                color="textPrimary"
              >
                { title }
              </Typography>
              <Typography
                component="h1"
                variant="body2"
                color="textPrimary"
              >
                { institution }
              </Typography>
            </React.Fragment>
          }
          className={classes.paddedView}
        />
      </ListItem>
    );
  };

  return (
    <BaseView>
      <Box my={4}>
        <Box className={classes.paddedView}>
          <Typography variant="h3" component="h1" gutterBottom>
            Scientific Advisory Commitee
          </Typography>
          <List>
            {members.map(inflateMember)}
          </List>
        </Box>
      </Box>
    </BaseView>
  );
}