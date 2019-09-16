import User from '../models/User';
import sendMail from '../helpers/mailer';
import destructureData from '../utils/index';
import { newToken } from '../utils/jwtToken';

const health = (req, res) => {
  res.status(200).json({ status: 'ok' });
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
        user: { ...userData, token },
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
      return res.status(201).json({
        success: true,
        message: 'Sign-up successful',
        user: { ...userData, token },
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

const forgotPasswordController = async (req, res) => {
  try {
    const currentTime = new Date();
    const expiryTime = new Date(currentTime.getTime() + 600 * 1000).valueOf();
    const token = { value: newToken(), expires: expiryTime };
    const user = await User.findOneAndUpadte({ email: req.body.email }).select('name email');
    if (user) {
      await sendMail({
        type: 'forgot-password',
        mailOptions: { to: user.email, subject: 'Forgot password' },
        varibles: { name: user.name, resetLink: `reset-password?token=${token.value}` },
      });
    }
    return res
      .status(200)
      .json({
        success: true,
        message: 'Please check your email for the reset password instructions',
      });
  } catch (err) {
    return res.status(400).json({ success: true, message: 'Some internal error occurued', err });
  }
};

export { health, signinController, signupController, forgotPasswordController };
