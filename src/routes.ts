import express from "express";
import userRoutes from "./routes/usersRoutes";
import artistRoutes from "./routes/artists.routes"
import authRoutes from "./routes/auth.routes";
import appointmentRoutes from "./routes/appointments.routes"

const router = express.Router();

//auth routes
router.use("/auth", authRoutes )

//user routes
router.use("/api/users", userRoutes);
router.use("/api/artist", artistRoutes);
router.use("/api/appointments", appointmentRoutes);


export default router;