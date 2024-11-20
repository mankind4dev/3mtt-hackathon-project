import express from 'express';
import { signup, signin, google, signOut } from '../controllers/auth.controller.js';
import { agentSignUp } from '../controllers/authAgent.controller.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.get("/signout", signOut);

router.post("/signup", agentSignUp);

export default router;