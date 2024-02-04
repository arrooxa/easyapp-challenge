import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface jwtVerify {
  id: string;
  iat: number;
}

function verifyJWT(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ error: "Acesso negado!" });

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET) as jwtVerify;

    res.locals.currentId = user.id;

    next();
  } catch (err) {
    res.status(400).json({ error: "O Token é inválido!" });
  }
}

export default verifyJWT;
