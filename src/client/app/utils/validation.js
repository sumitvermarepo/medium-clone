import EmailValidator from 'email-validator';

export const imageRequired = (value) => (value ? undefined : 'Required');
export const required = (value) => (value ? undefined : 'Required');
export const emailValidation = (value) => (value && !EmailValidator.validate(value) ? 'Please enter a valid Email' : undefined);
export const validPassword = (value) => {
  const reNum = /^(?=.*\d).{6,}$/;
  const re = /^(?=.*[A-Z]).{6,}$/;
  const specialCharacter = /[!@#$%^&*(),.?":{}|<>]/g;
  const containNumber = reNum.exec(value);
  const containsUcase = re.exec(value);
  const checkSpecialCharacter = specialCharacter.exec(value);
  if (!value) {
    return 'Required';
  }
  if (value.length < 6) {
    return 'Password must be min 6 character long';
  }
  if (!containNumber) {
    return 'Password must contains atleast 1 numeric digit';
  }
  if (!containsUcase) {
    return 'Password must contain atleast 1 capital letter';
  }
  if (!checkSpecialCharacter) {
    return 'Password must contains atleast 1 Special Character';
  }
  return undefined;
};

export const number = (value) =>
// eslint-disable-next-line no-restricted-globals
  (value && isNaN(Number(value)) ? 'Must be number' : undefined);

export const greaterThan1 = (value) => (value < 1 ? 'Value must be greater than 1' : undefined);

export const validatePasswordMatch = (value, allValues) => {
  // eslint-disable-next-line max-len
  if (!(allValues.password === allValues.confirmPassword) || !(allValues.new_password === allValues.confirm_password)) {
    return 'Both passwords must match';
  }
};
