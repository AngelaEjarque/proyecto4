import express from "express";
import { AppointmentController } from "../controllers/appointmentController";
import { auth } from "../middlewares/auth";
import { isAdmin } from "../middlewares/isAdmin";
import { isUser } from "../middlewares/isUser";

// -----------------------------------------------------------------------------

const router = express.Router();
const appointmentController= new AppointmentController();

router.get("/:id",auth, appointmentController.getById);
router.post("/create", auth, appointmentController.create);
router.patch("/:id", auth, appointmentController.update);
router.delete("/:id", auth,appointmentController.delete);
router.get("/artistdates/:id", auth, isAdmin, appointmentController.getByArtistId);
router.get("/userdates/:id", auth, isUser, appointmentController.getByUserId);


export default router;