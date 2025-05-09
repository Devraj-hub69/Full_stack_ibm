const express = require("express");
const { signUp, login } = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.post("/signup", signUp);
userRouter.post("/login", login);

module.exports=userRouter;