import TextField from "@material-ui/core/TextField";
import PropTypes from 'prop-types';
import React, { useEffect, useReducer } from 'react';

const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";
const INPUT_FOCUS = "INPUT_FOCUS";

const inputReducer = (state: any, action: { type: any; value: any; isValid: any; }) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
          isValid: action.isValid
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true
      };
    case INPUT_FOCUS:
      return {
        ...state,
        focused: true
      };
    default:
      return state;
  }
};

export default function LabeledInput(props: { initialValue?: any; initiallyValid?: any; variant?: any; required?: any; email?: any; label?: any; onValueChange?: any; id?: any; big?: boolean, multiline?: boolean}) {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : "",
    isValid: props.initiallyValid,
    touched: false,
    focused: false
  });

  const variant = props.variant ? props.variant : 'standard';
  const {
    onValueChange
  } = props;
  const {
    id
  } = props;


  useEffect(() => {
    if (true) {
      onValueChange(id, inputState.value, inputState.isValid);
    }
  }, [inputState, onValueChange, id]);

  const textChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    const text = event.target.value
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    dispatch({
      type: INPUT_CHANGE,
      value: text,
      isValid
    });
  };

  const lostFocusHandler = () => {
    dispatch({ 
      type: INPUT_BLUR,
      value: '',
      isValid: true 
    });
  };
  const error = !inputState.isValid && inputState.touched;

  return ( <
    TextField id = "standard-basic"
    label = {
      props.label
    }
    variant = {
      variant
    } 
    error={error}
    onChange={textChangeHandler}
    multiline={props.multiline}
    fullWidth={props.big}
    onBlur={lostFocusHandler}
    />
  );
}

LabeledInput.propTypes = {
  label: PropTypes.string,
  onValueChange: PropTypes.func,
  id: PropTypes.string,
  required: PropTypes.bool,
  email: PropTypes.bool,
  variant: PropTypes.string,
  big: PropTypes.bool,
  multiline: PropTypes.bool
};