import express from "express";
import {
  addVideo,
  addView,
  deleteVideo,
  getVideo,
  random,
  sub,
  trend,
  updateVideo,
} from "../controllers/video.js";
import { verifyToken } from "../utils/verifyToken.js";
const router = express.Router();

// Create a video

router.post("/", verifyToken, addVideo);
router.put("/:id", verifyToken, updateVideo);
router.delete("/:id", verifyToken, deleteVideo);
router.get("/find/:id", getVideo);
router.put("/view/:id", addView);
router.get("/trend", trend);
router.get("/random", random);
router.get("/sub", sub);

export default router;
