import mongoose from "mongoose";

export default function connectDB() {
  const { DB_USER, DB_PASSWORD, DB_CLUSTER } = process.env;

  const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`;

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
