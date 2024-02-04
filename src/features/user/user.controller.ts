import { Request, Response, NextFunction } from "express";
import * as userService from "./user.service";

async function getUserById(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  const user = await userService.getUserById(id);

  if (!user) res.status(404).json({ error: "User not found." });

  return res.send(user);
}

async function getCurrentUser(req: Request, res: Response, next: NextFunction) {
  const currentUserId = res.locals.currentId;

  const user = await userService.getUserById(currentUserId);

  return res.send(user);
}

export { getUserById, getCurrentUser };
