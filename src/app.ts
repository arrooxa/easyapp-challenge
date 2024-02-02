// app.ts
import express, { Express } from "express";
import connectDB from "@src/config/db";
import { dotenvConfig, validateEnvironmentVariables } from "@src/config/environment";
import { auth } from "@src/features/auth";

const app: Express = express();

validateEnvironmentVariables();

connectDB();

app.use(express.json());

app.use("/auth", auth);

export default app;
