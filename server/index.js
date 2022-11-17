import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT || 5000;
import cors from "cors";
dotenv.config();

// connection database
const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.group("Connected to Database");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cors());
// app.use(cors());
// app.use(
//   cors({
//     allowedHeaders: ["sessionId", "Content-Type"],
//     exposedHeaders: ["sessionId"],
//     origin: "*",
//     // origin: true,
//     credentials: true,
//     methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
//     preflightContinue: false,
//   })
// );
// routes
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

// middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.get("/", (req, res) => {
  res.send("api is running...");
});

app.listen(PORT, () => {
  connectDB();
  console.log("Connected to server");
});
