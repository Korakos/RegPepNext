import { Paper } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      backgroundColor: `#4054b2`,
      borderBottom: `1px solid ${theme.palette.divider}`,
      color: 'white'
    },
    alertBar: {
      backgroundColor: `#FFCC00`,
      alignItems: `center`,
      justifyContent: `center`,
      borderBottom: `1px solid ${theme.palette.divider}`,
      color: 'white'
    },
    toolbarTitle: {
      flex: 1
    },
    toolbarButton: {
      color: 'white'
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
      backgroundColor: theme.palette.background.default,
      WebkitBoxShadow: '0px 5px 10px 0px rgba(0,0,0,0.75)',
      MozBoxShadow: '0px 5px 10px 0px rgba(0,0,0,0.75)',
      boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.75)'
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 1,
      backgroundColor: 'white'
    }
  })
);

export default function Header(props: {
  sections: any;
  title: any;
  newsAlert?: any;
}) {
  const classes = useStyles();
  const { sections, title, newsAlert } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        {/*<Button size="medium" className={classes.toolbarButton}>
          Newsletter
        </Button>*/}
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        {/*<IconButton>
          <SearchIcon />
        </IconButton>
        <Button
          variant="outlined"
          size="medium"
          className={classes.toolbarButton}
          href="login"
        >
          Login
        </Button>*/}
      </Toolbar>
      {newsAlert ? (
        <Toolbar className={classes.alertBar}>
          <Link href={newsAlert.url}>{newsAlert.title}</Link>
        </Toolbar>
      ) : null}
      <Toolbar
        component="nav"
        variant="regular"
        className={classes.toolbarSecondary}
      >
        {sections.map(
          (section: {
            title: string | undefined;
            url: string | undefined;
            highlightedView: boolean | undefined;
            selected: boolean | undefined;
            disabled: boolean | undefined;
          }) => {
            if (section.disabled) return;
            return (
              <Paper
                key={section.title}
                elevation={section.selected ? 5 : 0}
                className={classes.toolbarLink}
              >
                <Link
                  color={section.highlightedView ? 'primary' : 'inherit'}
                  noWrap
                  variant="body1"
                  href={section.url}
                >
                  <b>{section.title}</b>
                </Link>
              </Paper>
            );
          }
        )}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string
};
