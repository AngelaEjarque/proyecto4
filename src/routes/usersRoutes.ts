import express from 'express';
const router = express.Router();

import userController from '../controllers/userController';

const ctrl = new userController();
router.get('/api/users', ctrl.getAll);
router.get('/api/userbyid', ctrl.getById);
router.post('/api/userregister', ctrl.register);
export default router;