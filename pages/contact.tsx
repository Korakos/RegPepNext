import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import BaseView from '../src/BaseView';
import { COLORS } from '../src/constants/color';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paddedView: {
      maxWidth: '100%',
      padding: theme.spacing(2)
    },
    coloredText: {
      color: COLORS.primary
    }
  })
);

export default function Contact() {
  const classes = useStyles();
  /*const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      name: '',
      message: ''
    },
    inputValidities: {
      email: false,
      name: false,
      message: false
    },
    formIsValid: false
  });

  const inputChangeHandler = useCallback(
    (inputIdentifier: any, inputValue: any, inputValidity: any) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier
      });
    },
    [dispatchFormState]
  );

  const sendMail = () => {
    if (!!formState.formIsValid) {
      console.log(formState);
    }
  };
  const buttonEnabled = !formState.formIsValid;

  return (
    <BaseView>
      <Box my={4}>
        <Box className={classes.paddedBox}>
          <LabeledInput
            required
            email
            id="email"
            label="e-mail"
            onValueChange={inputChangeHandler}
          />
        </Box>
        <Box className={classes.paddedBox}>
          <LabeledInput
            required
            id="name"
            label="name"
            onValueChange={inputChangeHandler}
          />
        </Box>
        <Box className={classes.paddedBox}>
          <LabeledInput
            big
            multiline
            required
            id="message"
            label="Message"
            onValueChange={inputChangeHandler}
          />
        </Box>
        <Box className={classes.paddedBox}>
          <Button
            disabled={buttonEnabled}
            variant="contained"
            color="primary"
            onClick={sendMail}
          >
            Send email
          </Button>
        </Box>
      </Box>
    </BaseView>
  );*/
  return (
    <BaseView>
      <Box my={4}>
        <Box className={classes.paddedView}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            className={classes.coloredText}
            color="primary"
          >
            Contact Information
          </Typography>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            className={classes.paddedView}
            color="primary"
          >
            RegPep23 Secretariat
          </Typography>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            className={classes.paddedView}
            color="primary"
          >
            Dr. Limei Zhang
          </Typography>
          <Box className={classes.paddedView}>
            <Typography
              variant="body1"
              component="h1"
              gutterBottom
              color="secondary"
            >
              Faculty of Medicine
            </Typography>
            <Typography
              variant="body1"
              component="h1"
              gutterBottom
              color="secondary"
            >
              National Autonomous University of Mexico
            </Typography>
            <Typography variant="body2" component="h1" gutterBottom>
              Av. Universidad 3000
              <br />
              Col. Universidad Nacional Autonoma de Mexico
              <br />
              Ciudad de Mexico, C.P. 04510
              <br />
              Mexico
            </Typography>
          </Box>
          <Box className={classes.paddedView}>
            <Typography variant="h5" component="h1" gutterBottom>
              Phone: +52 55 5623 2348
            </Typography>
            <Typography variant="h5" component="h1" gutterBottom>
              Email: regpep2020@unam.mx, limei@unam.mx
            </Typography>
          </Box>
        </Box>
      </Box>
    </BaseView>
  );
}
