import express from "express";
import { getAllCars } from "../controllers/carController.js";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/", authenticateToken, getAllCars);

export default router;
