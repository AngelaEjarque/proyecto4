import express from "express";
import { ArtistController } from "../controllers/ArtistController";
import { auth } from "../middlewares/auth";
import { isAdmin } from "../middlewares/isAdmin";

// -----------------------------------------------------------------------------

const router = express.Router();
const artistController= new ArtistController();

router.get("/", artistController.getAll);
router.get("/artistprofile/:id",auth, isAdmin, artistController.getByArtistId);
router.get("/:id", auth, artistController.getById);


export default router;