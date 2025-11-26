// utils/db.js
import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI is not defined");

  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: "kidscoding", // তোমার database name
  });

  isConnected = true;
  console.log("MongoDB connected");
};

export default connectDB;
