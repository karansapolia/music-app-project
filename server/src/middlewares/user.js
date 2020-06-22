import { validateSignIn, validateSignUp } from '../validations/auth';

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
