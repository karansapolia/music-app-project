import { request } from 'http';
import User from '../models/User';

const healthController = (req, res) => {
  res.json({ userHealthController: 'online'});
};

const signIn = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    const isMatch = await user.comparePassword(req.body.password);
    if(isMatch) {
      const userData = desctructureUserData(user);
      const token = getToken(userData);
    }
  } catch(isMatch) {
    
  }
};

export {
  healthController,
};
