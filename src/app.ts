// app.ts
import express, { Express, Request, Response } from "express";
import connectDB from "@src/config/db";
import { dotenvConfig, validateEnvironmentVariables } from "@src/config/environment";

const app: Express = express();

validateEnvironmentVariables();

connectDB();

// app.use("/lists", lists);

export default app;
