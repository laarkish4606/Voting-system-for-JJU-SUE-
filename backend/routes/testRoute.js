import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/roleMiddleware.js";

const router = express.Router();

// 👤 ANY LOGGED USER
router.get("/user-dashboard", protect, (req, res) => {
  res.json({
    message: "Welcome User Dashboard",
    user: req.user,
  });
});

// 👮 ONLY ADMIN
router.get("/admin-dashboard", protect, isAdmin, (req, res) => {
  res.json({
    message: "Welcome Admin Dashboard",
    user: req.user,
  });
});

export default router;
