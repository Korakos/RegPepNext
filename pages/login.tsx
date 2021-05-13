import { Collapse } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, { useState } from 'react';
import BaseView from '../src/BaseView';
import { handleGQLRequest } from '../src/functional/fetchGQL';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function LoginView(): React.ReactElement {
  const [loginMode, setLoginMode] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const classes = useStyles();

  const handleAuthentication = async () => {
    if (loginMode) {
      const gql = `
      mutation AuthT($password: String!, $username: String!){
        tokenAuth(password: $password, username: $username){
        token
      }
    }`;
      const variables = `{
        "password": "${password}",
        "username": "${username}"
      }`;
      const data = await handleGQLRequest(gql, variables, 'error logging in');
      console.log(data);
    } else {
      const gql = `
      mutation CreateAccount($password: String!, $email: String!, $username: String!){
        createAccount(password: $password, email: $email, username: $username){
          user {
            username
          }
        }
      }`;
      const variables = `{
        "password": "${password}",
        "username": "${username}",
        "email": "${email}"
      }`;
      const data = await handleGQLRequest(
        gql,
        variables,
        'error creating account'
      );
      console.log(data);
    }
  };

  return (
    <BaseView>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {loginMode ? 'Sign in' : 'Sign up'}
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setUsername(event.target.value)
            }
          />
          <Collapse in={!loginMode}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              label="E-mail"
              id="email"
              autoComplete="email"
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                setEmail(event.target.value)
              }
            />
          </Collapse>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setPassword(event.target.value)
            }
          />
          {/*<FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />*/}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleAuthentication}
          >
            {loginMode ? 'Sign in' : 'Sign up'}
          </Button>
          <Grid container>
            <Grid item>
              <Button
                color="primary"
                onClick={(): void => {
                  setLoginMode(!loginMode);
                }}
              >
                {loginMode
                  ? "Don't have an account? Sign Up"
                  : 'Back to Sign In'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </BaseView>
  );
}
