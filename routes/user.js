import express from "express";
import { registerUser, loginUser, getMyProfile, logout } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();
export default router;



router.post('/create', registerUser);
router.post('/login', loginUser);
router.get('/logout', isAuthenticated, logout);
router.get('/me', isAuthenticated, getMyProfile);