import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URL: string = process.env.MONGO_URL || " ";

// Function to connect to the MongoDB database
const dbConnect = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(`Error: ${(error as Error).message}`);
  }
};

export default dbConnect;
