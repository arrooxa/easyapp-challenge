// app.ts
import express, { Express } from "express";
import cookieParser from "cookie-parser";
import connectDB from "@src/config/db";
import { dotenvConfig, validateEnvironmentVariables } from "@src/config/environment";
import { auth } from "@src/features/auth";
import { user } from "@src/features/user";

const app: Express = express();

validateEnvironmentVariables();

connectDB();

app.use(express.json());
app.use(cookieParser());

app.use("/auth", auth);
app.use("/user", user);

export default app;
