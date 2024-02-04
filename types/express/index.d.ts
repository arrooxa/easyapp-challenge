import { JwtPayload } from "jsonwebtoken";

declare namespace Express {
  interface Request {
    token: string | JwtPayload;
  }
}
