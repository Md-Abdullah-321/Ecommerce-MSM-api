/*
 * Title: App Handlers
 * Description: Handle all app related things. 
 * Author: Md Abdullah 
 * Date: 11/18/23
 */


//Dependencies:
const express = require("express");
const userRouter = require("./routers/user.route.js");
const cookieParser = require("cookie-parser");
const app = express();


app.use(express.json());
app.use(cookieParser());
app.use("/api/user", userRouter);


module.exports = app;