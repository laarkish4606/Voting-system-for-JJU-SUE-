import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

const router = express.Router();

// 🔥 RUN ONCE OR MANUAL POSTMAN ONLY
router.post("/create-admin", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const exist = await User.findOne({ email });

    if (exist) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    // ❌ REMOVE bcrypt.hash here

    const admin = await User.create({
      username: username.toLowerCase(),
      email: email.toLowerCase(),
      password: password, // ✅ let schema handle hashing
      role: "admin",
    });

    res.status(201).json({
      message: "Admin created successfully",
      admin,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


export default router;
