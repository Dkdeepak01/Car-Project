import express from "express";
import { getAllDeals } from "../controllers/dealershipController.js";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/deals", authenticateToken, getAllDeals);

export default router;
