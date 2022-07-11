const express = require("express");

const authrouter = express.Router();

const {
  signup,
  login,
  getUserData,
} = require("../controllers/auth.controller");
const { encryptPassword } = require("../middlewares/auth.middleware");

authrouter.post("/signup", signup);
authrouter.post("/login", login);
//By neha
authrouter.get("/userdata/:id", getUserData);
module.exports = authrouter;
