import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  signup,
  login,
  logout,
} from "../controllers/authControllers.js";

const router = express.Router();

// Auth Routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;