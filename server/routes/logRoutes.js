import express from "express";
import { getLogs, replayRequest } from "../controllers/logController.js";

const router = express.Router();

router.get("/", getLogs);
router.post("/replay/:id", replayRequest);

export default router;