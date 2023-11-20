/*
 * Title: User Router
 * Description: Handle all auth router related work.
 * Author: Md Abdullah
 * Date: 11/20/23
 */

const { handleLogin, handleLogout } = require("../controllers/auth.controllers");

//Dependencies:
const authRouter = require("express").Router();

authRouter.post("/login", handleLogin);
authRouter.post("/logout", handleLogout);

module.exports = authRouter;

