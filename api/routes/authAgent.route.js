import express from "express";
import { agentSignUp } from "../controllers/authAgent.controller.js";

const router = express.Router();

router.post("/signup", agentSignUp);

export default router;