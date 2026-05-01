import express from "express";
import { UserLogin, UserRegister } from "../controllers/authcontroller.js";
import { StudentRegister } from "../controllers/verificationController.js";
import { castVote } from "../controllers/voterController.js";
import { getCandidates } from "../controllers/getCandidate.js";
import { protect } from "../middleware/authMiddleware.js";
import { forgotPassword, } from "../controllers/forgetPasswordController.js";
import { resetPassword } from "../controllers/resetPasswordController.js";

const userRoutes = express.Router();

userRoutes.post("/register", UserRegister);
userRoutes.post("/login", UserLogin);

userRoutes.post("/student-register", StudentRegister);

userRoutes.post("/vote-register", protect, castVote);


userRoutes.get("/candidate", getCandidates);
userRoutes.post("/forgot-password", forgotPassword);
userRoutes.post("/reset-password/:token", resetPassword);



export default userRoutes;
