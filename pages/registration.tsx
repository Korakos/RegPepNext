import { Checkbox, Theme, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { createRef, useCallback, useReducer } from 'react';
import BaseView from '../src/BaseView';
import { COLORS } from '../src/constants/color';
import { formReducer, FORM_INPUT_UPDATE } from '../src/functional/formReducer';
import LabeledInput from '../src/LabeledInput';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paddedHorizontal: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    paddedBox: {
      padding: theme.spacing(2)
    },
    paddedTop: {
      paddingTop: theme.spacing(4)
    },
    coloredText: {
      color: COLORS.primary
    }
  })
);

const REGISTRATION_FILES = 'REGISTRATION_FILES';
const STUDENT_PROOF = 'STUDENT_PROOF';
const REGISTRATION_TYPES = [
  {
    shorthand: 'regM',
    fullType: 'Regular member registration'
  },
  {
    shorthand: 'NM',
    fullType: 'Non member registration'
  },
  {
    shorthand: 'ret',
    fullType: 'Retired Member'
  },
  {
    shorthand: 'retNM',
    fullType: 'Retired Nonmember registration'
  },
  {
    shorthand: 'pdtM',
    fullType: 'Postdoctoral Trainee Member registration'
  },
  {
    shorthand: 'pdtNM',
    fullType: 'Posdoctoral Trainee Nonmember registration'
  },
  {
    shorthand: 'gradM',
    fullType: 'Graduate student member registration'
  },
  {
    shorthand: 'gradNM',
    fullType: 'Graduate student Nonmember registration'
  },
  {
    shorthand: 'undergradM',
    fullType: 'Undergraduate student Member registration'
  },
  {
    shorthand: 'undergradNM',
    fullType: 'Undergraduate Nonmember registration'
  },
  {
    shorthand: 'oneDayM',
    fullType: 'One Day Member registration'
  },
  {
    shorthand: 'oneDayNM',
    fullType: 'One Day Nonmember registration'
  },
  {
    shorthand: 'highschool',
    fullType: 'High School Teacher'
  },
  {
    shorthand: 'guest',
    fullType: 'Guest registration'
  },
  {
    shorthand: 'banquet',
    fullType: 'Conference Banquet'
  },
  {
    shorthand: 'yit',
    fullType: 'Young Investigator Reception'
  }
];

export default function Registration() {
  const classes = useStyles();
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      name: '',
      lastName: '',
      message: '',
      additionals: '',
      address: '',
      country: '',
      city: '',
      registrationReceipt: '',
      registrationTypes: {
        regM: false,
        NM: false,
        ret: false,
        retNM: false,
        pdtM: false,
        pdtNM: false,
        gradM: false,
        gradNM: false,
        undergradM: false,
        undergradNM: false,
        oneDayM: false,
        oneDayNM: false,
        highschool: false,
        guest: false,
        banquet: false,
        yit: false
      },
      registrationComment: '',
      REGISTRATION_FILES: '',
      STUDENT_PROOF: ''
    },
    inputValidities: {
      email: false,
      name: false,
      lastName: false,
      message: false,
      additionals: true,
      address: false,
      country: false,
      city: false,
      registrationReceipt: false,
      registrationTypes: false,
      registrationComment: true,
      REGISTRATION_FILES: false,
      STUDENT_PROOF: false
    },
    formIsValid: false
  });

  const handleChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = {
      ...formState.inputValues.registrationTypes,
      [name]: event.target.checked
    };
    dispatchFormState({
      type: FORM_INPUT_UPDATE,
      value: value,
      isValid: true,
      input: 'registrationTypes'
    });
  };

  const regFile = createRef<HTMLInputElement>();
  const studentFiles = createRef<HTMLInputElement>();

  const handleFile = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let files = null;
    if (name === REGISTRATION_FILES) {
      try {
        files = regFile!.current!.files;
      } catch (e) {
        console.log('Real null >> ', e);
      }
    } else if (name === STUDENT_PROOF) {
      try {
        files = studentFiles!.current!.files;
      } catch (e) {
        console.log('Real null >> ', e);
      }
    }
    if (files?.length) {
      console.log(files[0].name);
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: files,
        isValid: true,
        input: name
      });
    }
    console.log(event.currentTarget);
  };

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

  const sendRegistration = () => {
    if (!!formState.formIsValid) {
      console.log(formState);
    }
  };
  const buttonEnabled = !formState.formIsValid;

  const inflateOptions = (option: {
    shorthand: string;
    fullType: React.ReactNode;
  }) => {
    return (
      <FormControlLabel
        key={option.shorthand}
        control={
          <Checkbox
            checked={formState.inputValues.registrationTypes.gilad}
            onChange={handleChange(option.shorthand)}
            value={option.shorthand}
          />
        }
        label={option.fullType}
      />
    );
  };

  const regFiles = formState.inputValues.REGISTRATION_FILES;
  let regFileName = '';
  if (regFiles.length) {
    regFileName = regFiles[0].name;
  }

  const stdFiles = formState.inputValues.STUDENT_PROOF;
  let stdFileName = '';
  if (stdFiles.length) {
    stdFileName = stdFiles[0].name;
  }

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
            required
            id="lastName"
            label="Last Name"
            onValueChange={inputChangeHandler}
          />
        </Box>
        <Box className={classes.paddedBox}>
          <Typography
            variant="body1"
            component="h1"
            gutterBottom
            className={classes.paddedTop}
          >
            In case you registered other participants, please list them
            separated by commas: i.e. John Doe, Jane Doe ...
          </Typography>
          <LabeledInput
            big
            multiline
            id="additionals"
            label="Additional Participants"
            onValueChange={inputChangeHandler}
          />
        </Box>
        <Box className={classes.paddedBox}>
          <LabeledInput
            big
            multiline
            required
            id="address"
            label="Institutional Address"
            onValueChange={inputChangeHandler}
          />
        </Box>
        <Box className={classes.paddedBox}>
          <LabeledInput
            required
            id="country"
            label="Country"
            onValueChange={inputChangeHandler}
          />
        </Box>
        <Box className={classes.paddedBox}>
          <LabeledInput
            required
            id="city"
            label="City"
            onValueChange={inputChangeHandler}
          />
        </Box>
        <Box className={classes.paddedBox}>
          <FormControl
            required
            error={!formState.inputValidities.registrationTypes}
            component="fieldset"
          >
            <FormLabel component="legend">
              What Registration types did you pay for?
            </FormLabel>
            <FormGroup>{REGISTRATION_TYPES.map(inflateOptions)}</FormGroup>
            <FormHelperText>
              Please pick at least one registration format
            </FormHelperText>
          </FormControl>
        </Box>
        <Box className={classes.paddedBox}>
          <Typography
            variant="body1"
            component="h1"
            gutterBottom
            className={classes.paddedTop}
          >
            In case you payed for two or more registrations of the same type,
            please specify here.
          </Typography>
          <LabeledInput
            big
            multiline
            id="registrationComment"
            label="Registration Comments"
            onValueChange={inputChangeHandler}
          />
        </Box>
        <Box className={classes.paddedBox}>
          <input
            accept="application/pdf"
            style={{ display: 'none' }}
            id={REGISTRATION_FILES}
            type="file"
            ref={regFile}
            onChange={handleFile(REGISTRATION_FILES)}
          />
          <Box display="flex" flexDirection="row">
            <label htmlFor={REGISTRATION_FILES}>
              <Button variant="contained" component="span" color="primary">
                Upload Payment Receipt
              </Button>
            </label>
            {regFileName ? (
              <Typography variant="body1" className={classes.paddedHorizontal}>
                {regFileName}
              </Typography>
            ) : null}
          </Box>
        </Box>
        <Box className={classes.paddedBox}>
          <input
            accept="application/pdf"
            style={{ display: 'none' }}
            id={STUDENT_PROOF}
            type="file"
            ref={studentFiles}
            onChange={handleFile(STUDENT_PROOF)}
          />
          <Box display="flex" flexDirection="row">
            <label htmlFor={STUDENT_PROOF}>
              <Button variant="contained" component="span" color="primary">
                Upload Proof of Student Status
              </Button>
            </label>
            {stdFileName ? (
              <Typography variant="body1" className={classes.paddedHorizontal}>
                {stdFileName}
              </Typography>
            ) : null}
          </Box>
        </Box>
        <Box className={classes.paddedBox}>
          <Button
            disabled={buttonEnabled}
            variant="contained"
            color="primary"
            onClick={sendRegistration}
          >
            Register
          </Button>
        </Box>
      </Box>
    </BaseView>
  );
}
