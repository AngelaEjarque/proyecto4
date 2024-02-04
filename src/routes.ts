import express from "express";
import test from "./routes/test";
import userRoutes from "./routes/usersRoutes";

const router = express.Router();
router.get("/hola", test);
router.get('/api/users', userRoutes);
router.get('/api/userbyid', userRoutes);
router.post('/api/userregister', userRoutes);
router.post('/api/login', userRoutes)
router.post('/api/update', userRoutes)
export default router;