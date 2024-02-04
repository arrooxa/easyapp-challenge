import express from "express";
import * as authController from "./auth.controller";
import validate from "@src/middleware/validate";
import { login, register } from "./auth.validation";

const router = express.Router();

router.post("/register", validate(register), authController.register);

router.post("/login", validate(login), authController.login);

export default router;
