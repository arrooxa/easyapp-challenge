import { RegisterPayload } from "./auth.dto";
import Users from "./auth.model";
import bcrypt from "bcryptjs";

async function registerUser({ email, name, password }: RegisterPayload) {
  const userExists = await Users.findOne({ email });

  if (userExists) return false;

  const passwordHash = await bcrypt.hash(password, await bcrypt.genSalt(12));

  console.log(passwordHash);
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

export { registerUser };
