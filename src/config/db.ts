import mongoose from "mongoose";

export default function connectDB() {
  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.9e15erw.mongodb.net/?retryWrites=true&w=majority`;

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
