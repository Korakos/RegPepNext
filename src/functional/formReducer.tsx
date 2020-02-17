/*
*
* Como usar el formReducer - just import along with the constant:
*
import {
  FORM_INPUT_UPDATE,
  formReducer
} from '../../components/functionality/formReducer';
*
* then create the state inside the component:
*
const [formState, dispatchFormState] = useReducer(formReducer, {
  inputValues: {
    email: '',
    password: ''
  },
  inputValidities: {
    email: false,
    password: false
  },
  formIsValid: false
});
*
* create the inputChangeHandler method:
*
const inputChangeHandler = useCallback(
  (inputIdentifier, inputValue, inputValidity) => {
    dispatchFormState({
      type: FORM_INPUT_UPDATE,
      value: inputValue,
      isValid: inputValidity,
      input: inputIdentifier
    });
  },
  [dispatchFormState]
);
*
* finally, asign said handler to each input, alongside verification parameters
* taking care to set the id field to be equal to the inputValue identifier
*
<Input
  id="password"
  label="Password"
  keyboardType="default"
  secureTextEntry
  required
  minLength={5}
  autoCapitalize="none"
  errorText="Please enter a valid password."
  onInputChange={inputChangeHandler}
  initialValue=""
/>
*
*/
export const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

export const formReducer = (
  state: { inputValues: any; inputValidities: any; formIsValid?: boolean },
  action: { type: string; input: any; value: any; isValid: any }
) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues
    };
  }
  return state;
};
