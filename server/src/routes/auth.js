import { Router } from 'express';
import { signinController, signupController, forgotPasswordController } from '../controllers/auth';
import { signInValidity, signUpValidity } from '../middlewares/user';

const router = Router();

router.post('/signin', signInValidity, signinController);
router.post('/signup', signUpValidity, signupController);
router.post('/forgot-password', forgotPasswordController);

export default router;
