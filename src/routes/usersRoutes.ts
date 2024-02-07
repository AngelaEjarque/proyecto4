import express from "express";
import userController from "../controllers/userController";
import { auth } from "../middlewares/auth";
import { ProfileController } from "../controllers/profileController";
import { isSuperAdmin } from "../middlewares/isSuperAdmin";

const router = express.Router();
const ctrl = new userController();

router.get("/", auth, isSuperAdmin, ctrl.getAll);
router.get("/:id", auth, ctrl.getById);
router.get("/profile", auth, ctrl.userProfile);  //perfil usuario
router.post("/register", ctrl.register);
router.patch("/:id", auth, ctrl.update);
router.post('/api/login',ctrl.login)
router.delete("/:id", auth, isSuperAdmin, ctrl.delete);
router.get("/profile2", auth, ProfileController.userProfile); 

export default router;