import express from "express";
import { ArtistController } from "../controllers/ArtistController";
import { auth } from "../middlewares/auth";
import { isAdmin } from "../middlewares/isAdmin";
import { isSuperAdmin } from "../middlewares/isSuperAdmin";

// -----------------------------------------------------------------------------

const router = express.Router();
const artistController= new ArtistController();

router.get("/", auth, artistController.getAll);
router.get("/artistprof/:id",auth, isAdmin, artistController.getByArtistId);
router.get("/:id", auth, artistController.getById);
router.post("/create",  auth, isSuperAdmin, artistController.create);
router.patch("/:id", auth, isSuperAdmin, artistController.update);
router.delete("/:id", auth, isSuperAdmin, artistController.delete);

export default router;