import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import path from "path";

import userRoutes from "./routes/userRoutes.js";
// import courseRoutes from ".routes/courseRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import connectDB from "./config/db.js";

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

// Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// Routes
app.use("/api/users", userRoutes);
// app.use("api/courses", courseRoutes);>>>>

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.use(notFound);
app.use(errorHandler);

// Connect to MongoDB
// import mongooseConfig from "./config/mongoose.conf.js";
// mongooseConfig(mongoose);

// Serve React files
// Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, "../client/dist")));
