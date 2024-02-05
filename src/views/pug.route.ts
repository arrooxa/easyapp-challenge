import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.render("login");
});

router.get("/register", (req: Request, res: Response) => {
  res.render("register");
});

router.get("/home", (req: Request, res: Response) => {
  res.render("home");
});

export default router;
