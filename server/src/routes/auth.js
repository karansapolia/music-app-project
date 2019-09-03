import { Router } from 'express';
import { signinController, signupController } from '../controllers/auth';
import { signInValidity, signUpValidity } from '../middlewares/user';

const router = Router();

router.post('/signin', signInValidity, signinController);
router.post('/signup', signUpValidity, signupController);

export default router;
