import isEmpty from '../utils/validations/isEmpty';

const addErrorIfEmpty = (errorObj, object, key) => {
  if (isEmpty(object[key])) {
    Object.assign(errorObj, { [key]: `${key} field is required` });
  }
  return errorObj;
};

const addErrorIfNotValid = (validateFn, type) => (errorObj, object, key) => {
  if (!validateFn(object[key])) {
    Object.assign(errorObj, { [key]: `${object[key]} value is not valid ${key}. Required type: ${type}` });
  }
  return errorObj;
};

const isString = (str) => typeof str === 'string' || str instanceof String;

const addErrorIfNotString = addErrorIfNotValid(isString, 'string');

const validateEmail = (email) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).toLowerCase());
};

const validateImageUrl = (profileImage) => {
  const imageUrlRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
  return imageUrlRegex.test(String(profileImage));
}

const addErrorIfNotEmail = addErrorIfNotValid(validateEmail, 'email');

const addErrorIfNotImageUrl = addErrorIfNotValid(validateImageUrl, 'profileImage');

const getErrorsForProperties = (properties, object) => {
  const errors = properties.reduce((currentErrors, property) => addErrorIfEmpty(currentErrors, object, property), {});
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

function validateSignIn(user) {
  const propertiesToCheck = ['email', 'password'];
  const isValidAndErrors = getErrorsForProperties(propertiesToCheck, user);
  return isValidAndErrors;
}

function validateSignUp(user) {
  const propertiesToCheck = [
    ['email', [addErrorIfEmpty, addErrorIfNotString, addErrorIfNotEmail]],
    ['password', [addErrorIfEmpty, addErrorIfNotString]],
    ['name', [addErrorIfEmpty, addErrorIfNotString]],
    ['userName', [addErrorIfEmpty, addErrorIfNotString]],
    ['profileImage', [addErrorIfNotImageUrl]],
  ];
  const isValidAndErrors = getErrorsForProperties(propertiesToCheck, user);
  return isValidAndErrors;
}

const signInValidity = async (req, res, next) => {
  const user = req.body;
  const userFieldsAreValid = validateSignIn(user);
  if (!userFieldsAreValid.isValid) {
    res.status(400);
    return res.json(userFieldsAreValid.errors);
  }
  return next();
};

const signUpValidity = async (req, res, next) => {
  const user = req.body;
  const userFieldsAreValid = validateSignUp(user);
  if (!userFieldsAreValid) {
    res.status(400);
    return res.json(userFieldsAreValid.errors);
  }
  return next();
};

export { signInValidity, signUpValidity };
