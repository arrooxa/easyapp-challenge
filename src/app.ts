// app.ts
import express, { Express } from "express";
import cookieParser from "cookie-parser";
import connectDB from "@src/config/db";
import { dotenvConfig, validateEnvironmentVariables } from "./config/environment";
import { auth } from "@src/features/auth";
import { user } from "@src/features/user";
import { pug } from "@src/views";
import path from "path";

const app: Express = express();

validateEnvironmentVariables();

connectDB();

app.use(express.json());
app.use(cookieParser());

app.set("view engine", "pug");
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));

app.use("/pug", pug);
app.use("/auth", auth);
app.use("/user", user);

export default app;
