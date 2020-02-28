import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4054b2'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff',
      paper: '#f5f5f5'
    }
  },
  typography: {
    body1: {
      fontSize: '1.25rem'
    }
  }
});

export default theme;
