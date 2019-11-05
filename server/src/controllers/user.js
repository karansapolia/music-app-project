import User from '../models/User';
import destructureData from '../utils/index';
import { newToken, verifyToken } from '../utils/jwtToken';

const healthController = (req, res) => {
  res.json({ userHealthController: 'online'});
};

const showUsers = async (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(`Error: ${err}`));
}

const signIn = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    const isMatch = await user.comparePassword(req.body.password);
    if(isMatch) {
      const userData = destructureData(user);
      const token = getToken(userData);
      return Response.status(200).json({
        success: true,
        message: 'Sign-in successful',
        user: { ...userData , token },
      });
    }
  } catch(isMatch) {
    
  }
};

export {
  healthController,
  showUsers,
};
