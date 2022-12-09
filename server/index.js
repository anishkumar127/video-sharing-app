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

// app.use(cors());
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

// testing

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//   })
// );

// app.use(function (req, res, next) {
//   res.header("Content-Type", "application/json;charset=UTF-8");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
// test 2nd
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );

const corsOrigin = {
  // origin: "http://localhost:3000", //or whatever port your frontend is using
  origin: true, //or whatever port your frontend is using
  credentials: true,
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",

  optionSuccessStatus: 200,
};
app.use(cors(corsOrigin));

app.use(cookieParser());
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("api is running...");
// });

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

app.listen(PORT, () => {
  connectDB();
  console.log("Connected to server");
});
