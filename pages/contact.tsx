import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { useCallback, useReducer } from 'react';
import BaseView from '../src/BaseView';
import { formReducer, FORM_INPUT_UPDATE } from '../src/functional/formReducer';
import LabeledInput from '../src/LabeledInput';

const useStyles = makeStyles(() =>
  createStyles({
    paddedHorizontal: {
      paddingLeft: '5%',
      paddingRight: '5%'
    },
    paddedBox: {
      padding: '5%'
    }
  })
);

export default function Index() {
  const classes = useStyles();
  const [formState, dispatchFormState] = useReducer(formReducer, {
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
    if(!!formState.formIsValid){
      console.log(formState);
    }
  };
  const buttonEnabled = !formState.formIsValid;

  return (
    <BaseView>
      <Box my={4}>
        <Box className={classes.paddedHorizontal}>
          <LabeledInput required email id="email" label="e-mail" onValueChange={inputChangeHandler}/>
        </Box>
        <Box className={classes.paddedHorizontal}>
          <LabeledInput required id="name" label="name" onValueChange={inputChangeHandler}/>
        </Box>
        <Box className={classes.paddedHorizontal}>
          <LabeledInput big multiline required id="message" label="Message" onValueChange={inputChangeHandler}/>
        </Box>
        <Box className={classes.paddedBox}>
        <Button disabled={buttonEnabled} variant="contained" color="primary" onClick={sendMail}>
          Send email
        </Button>
        </Box>
      </Box>
    </BaseView>
  );
}
