import express from "express";
import * as authController from "./auth.controller";

const router = express.Router();

router.get("/register", authController.Register);

export default router;
