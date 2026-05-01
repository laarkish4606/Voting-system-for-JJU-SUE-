import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/roleMiddleware.js";

import { createCandidate } from "../controllers/candidateController.js";
import { updateCandidate } from "../controllers/updateCandidate.js";
import { deleteCandidate } from "../controllers/deleteCandidate.js";

import upload from "../middleware/upload.js";

const adminRoutes = express.Router();

// 🔐 ONLY ADMIN CAN CREATE CANDIDATE
adminRoutes.post(
  "/add-candidate",
  protect,
  isAdmin,
  upload.single("img"),
  createCandidate
);

// 🔐 UPDATE
adminRoutes.put(
  "/update-candidate/:id",
  protect,
  isAdmin,
  upload.single("img"),
  updateCandidate
);

// 🔐 DELETE
adminRoutes.delete(
  "/delete-candidate/:id",
  protect,
  isAdmin,
  deleteCandidate
);

export default adminRoutes;
 