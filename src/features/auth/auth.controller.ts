import { Request, Response, NextFunction } from "express";
import * as authService from "./auth.service";

async function Register(req: Request, res: Response, next: NextFunction) {
  const registeredUser = await authService.registerUser(req.body);

  if (!registeredUser) return res.status(409).json({ error: "Email already registered." });

  return res.send({ message: "User created successfully." });
}

export { Register };
