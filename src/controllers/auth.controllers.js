/*
 * Title: Authentication Controllers 
 * Description: Handle authentication related things.
 * Author: Md Abdullah
 * Date: 11/20/23
 */


//Dependencies:
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model.js');
const { errorHandler } = require('../utils/error.js');
const { errorResponse, successResponse } = require('./responseController.js');
const createJSONWebToken = require('../helper/jsonwebtoken.js');
require('dotenv').config();


const handleLogin = async (req, res, next) => {
    try {
        //email & password from req.body
        const { email, password } = req.body;

        //isExist
        const user = await User.findOne({ email });
        if (!user) {
            return errorResponse(res, {
                statusCode: 404,
                message: "User does not exist with this email, plese register first."
            });
        }


        //compare the password
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return errorResponse(res, {
                statusCode: 401,
                message: "Email/password did not match."
            })
        }

        //isBanned
        if (user.isBanned) {
            return errorResponse(res, {
                statusCode: 403,
                message: "You are banned, please contact authority."
            })
        }

        //token, cookie
        const accessToken = createJSONWebToken({ user }, process.env.SECRET_KEY, "60m");

        res.cookie('accessToken', accessToken, {
            maxAge: 60 * 60 * 100,
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        })


        //user without password
        const userWithoutPassword = await User.findOne({ email }).select('-password');

        return successResponse(res, {
            statusCode: 200,
            message: "user logged in successfully",
            payload: {...userWithoutPassword}
        })
    } catch (error) {
        next(error);
    }
}


const handleLogout = async (req, res, next) => {
    try {
        res.clearCookie('accessToken');

        //success response
        return successResponse(res, {
            statusCode: 200,
            message: "user logged out successfully"
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    handleLogin,
    handleLogout
}