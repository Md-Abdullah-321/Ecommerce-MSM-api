/*
 * Title: User Router
 * Description: Handle all user router related work.
 * Author: Md Abdullah
 * Date: 11/18/23
 */

const { getUser } = require("../middlewares/user.controller.js");


//Dependencies:
const userRouter = require("express").Router();

userRouter.get("/", getUser);

module.exports = userRouter;

