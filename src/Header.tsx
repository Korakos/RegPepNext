import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      backgroundColor: `#4054b2`,
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
      overflowX: 'auto'
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0
    }
  })
);

export default function Header(props: { sections: any; title: any }) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small" className={classes.toolbarButton}>
          Newsletter
        </Button>
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
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="regular"
        className={classes.toolbarSecondary}
      >
        {sections.map(
          (section: { title: string | undefined; url: string | undefined }) => (
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
              className={classes.toolbarLink}
            >
              {section.title}
            </Link>
          )
        )}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string
};
