import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

export default mongoose.model("Users", UsersSchema);
