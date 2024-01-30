import express from "express";
import test from "./routes/test";

const router = express.Router();
router.get("/hola", test);

export default router;