import express from "express";
import user from "../models/user.js";

const router = express.Router();

router.post("/create-user", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (name && email && password) {
      const newUser = new user({
        name,
        email,
        password,
      });

      const userdata = await newUser.save();
      res.status(201).json(userdata);
    } else {
      res.status(403).json({ message: "All fields are required" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
