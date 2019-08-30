const signinController = (req, res) => {
  res.json({ signInStatus: 'controller reaching'});
}

const signupController = (req, res) => {
  res.json({ signupController: 'controller reached'});
}

export {
  signinController,
  signupController,
};