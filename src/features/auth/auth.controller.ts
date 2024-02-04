import { Request, Response, NextFunction } from "express";
import * as authService from "./auth.service";

async function register(req: Request, res: Response, next: NextFunction) {
  const registeredUser = await authService.registerUser(req.body);

  if (!registeredUser) return res.status(409).json({ error: "Email already registered." });

  return res.send({ message: "User created successfully." });
}

async function login(req: Request, res: Response, next: NextFunction) {
  const token = await authService.login(req.body);

  if (!token) return res.status(404).json({ error: "Credentials invalid." });

  return res.send({ token });
}

export { register, login };
