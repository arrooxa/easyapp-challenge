import { UserTokenDTO } from "@src/features/user/user.dto";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

function verifyJWT(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ error: "Access denied." });

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET) as UserTokenDTO;

    res.locals.currentId = user._id;

    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid token." });
  }
}

export default verifyJWT;
