import mongoose from "mongoose";

export default function connectDB() {
  const uri = process.env.DB_URI;

  try {
    mongoose.connect(uri);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  const dbConnection = mongoose.connection;

  dbConnection.once("open", () => {
    console.log(`[Database]: Connected at ${uri}`);
  });

  dbConnection.on("error", (err) => {
    console.error(`[Database]: Connection error (${err})`);
  });
}
