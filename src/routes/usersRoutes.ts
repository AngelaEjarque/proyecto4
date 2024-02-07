import express from 'express';

const router = express.Router();

import userController from '../controllers/userController';
import { auth } from '../middlewares/auth';

const ctrl = new userController();
router.get('/api/users', auth, ctrl.getAll);
router.get('/api/userbyid', ctrl.getById);
router.post('/api/userregister', ctrl.register);
router.post('/api/login', ctrl.login)
router.post('/api/update', ctrl.update)
export default router;