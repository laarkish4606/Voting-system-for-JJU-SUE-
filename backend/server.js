import express from "express";
import connectDB from "./config/DBconnection.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.js";
import adminRoutes from "./routes/adminRoute.js";
import testRoutes from "./routes/testRoute.js";
import setupRoutes from "./routes/setupRoutes.js"
const app = express();

const PORT = 8000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// static files
app.use("/uploads", express.static("uploads"));

// routes
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/setup", setupRoutes);
app.use("/api/test", testRoutes);

// DB
connectDB();

// server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
