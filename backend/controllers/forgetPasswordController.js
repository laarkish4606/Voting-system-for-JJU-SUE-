import crypto from "crypto";
import User from "../models/User.js";
import { sendEmail } from "../../src/utils/sendEmail.js";


export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 🔥 generate reset token
    const resetToken = crypto.randomBytes(32).toString("hex");

    user.resetToken = resetToken;
    user.resetExpire = Date.now() + 15 * 60 * 1000; // 15 min

    await user.save();

    // 🔥 create reset link
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

    // 🔥 send email
    await sendEmail(
      user.email,
      "Password Reset Request",
      `
        <h3>JJU Online Voting System Reset pass request</h3>
        <p>Click below to reset your password:</p>
        <a href="${resetUrl}">Reset Password</a>
      `
    );

    res.json({ message: "Reset link sent to your email" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
