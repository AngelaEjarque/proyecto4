import express from "express";
import test from "./routes/test";
import userRoutes from "./routes/usersRoutes";
import { auth } from "./middlewares/auth";
import authRoutes from "./routes/auth.routes";

const router = express.Router();

//auth routes
router.use("/auth", authRoutes )

//user routes
router.use("/api/users", userRoutes);

// router.get("/hola", test);
// router.get('/api/users', userRoutes);
// router.get('/api/userbyid', userRoutes);
// router.post('/api/userregister', userRoutes);
// router.post('/api/login', userRoutes)
// router.post('/api/update', userRoutes)
export default router;