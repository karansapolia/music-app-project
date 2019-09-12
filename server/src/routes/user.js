import express from 'express';
import { healthController, showUsers } from '../controllers/user';

const router = express.Router();

router
  .route('/')
  .get(showUsers);

router.get('/health', healthController);

export default router;