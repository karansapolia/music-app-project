import User from "../models/User";
import destructureData from '../utils';
import { newToken } from '../utils/auth';

const health = (req, res) => {
  res.status(200);
  res.json({ status: 'ok' });
};

const signinController = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    const isMatch = await user.checkPassword(req.body.password);
    if (isMatch) {
      const userData = destructureData(user);
      const token = newToken(userData);
      return res.status(200).json({
        success: true,
        message: 'Sign-in successful',
        user: { ...userData, token }
      });
    }
    return res.status(400).json({
      sucess: false,
      message: 'Sign-in failed. Check email and password',
    });
  } catch (error) {
    return res.status(400).json({
      sucess: false,
      message: 'Email not found. Please sign up',
    });
  }
};

const signupController = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const userData = destructureData(user);
    const token = newToken(userData);
    if (token) {
      return res.status(200).json({
        success: true,
        message: 'Sign-up successful',
        user: { ...userData, token }
      });
    }
    return res.status(500).json({
      success: false,
      message: 'Failed to create token',
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: 'An account with this email already exists',
      });
    }
    return res.status(500).json({
      success: false,
      message: 'Internal error',
    });
  }
};

export { health, signinController, signupController };
