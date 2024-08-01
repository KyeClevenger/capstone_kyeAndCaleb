import express from "express";
const router = express.Router();
import { authUser } from "../controllers/userController.js";

router.post("/auth", authUser);

// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;

export default router;
