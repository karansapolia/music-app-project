import express from 'express';
import { healthController } from '../controllers/user';

const router = express.Router();

router.get('/health', healthController);

export default router;