import express from "express";
import {
  addComment,
  deleteComment,
  getComment,
} from "../controllers/comment.js";
import { verifyToken } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/", verifyToken, addComment);
router.post("/:id", verifyToken, deleteComment);
router.get("/:videoId", getComment);

export default router;
