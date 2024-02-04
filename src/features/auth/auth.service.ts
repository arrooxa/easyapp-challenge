import { LoginPayload, RegisterPayload } from "./auth.dto";
import Users from "@src/features/user/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function registerUser({ email, name, password }: RegisterPayload) {
  const userExists = await Users.findOne({ email });

  if (userExists) return false;

  const passwordHash = await bcrypt.hash(password, await bcrypt.genSalt(12));

  try {
    const user = new Users({
      email,
      name,
      password: passwordHash,
    });

    return await user.save();
  } catch (err) {
    console.error(err);
  }
}

async function login({ email, password }: LoginPayload) {
  const user = await Users.findOne({ email });

  if (!user) return false;

  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) return false;

  delete user.password;

  const jwtToken = jwt.sign(user.toJSON(), process.env.JWT_SECRET, { expiresIn: "1h" });

  return jwtToken;
}

export { registerUser, login };
