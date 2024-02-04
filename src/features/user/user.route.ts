import express from "express";
import * as userController from "./user.controller";
import verifyJWT from "@src/middleware/verifyJWT";
import { getUserById } from "./user.validation";
import validate from "@src/middleware/validate";

const router = express.Router();

router.get("/", verifyJWT, userController.getCurrentUser);

router.get("/:id", verifyJWT, validate(getUserById), userController.getUserById);

export default router;
