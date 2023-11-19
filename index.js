/*
 * Title: Server file
 * Description: Run server.
 * Author: Md Abdullah
 * Date: 11/18/23
 */


//Dependencies:
const app = require("./src/app");
require("dotenv").config();


const PORT = process.env.PORT;
app.listen(PORT, (err) => {
    console.log(`Server running on port ${PORT}`);
});


//Global Error Middleware:
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})