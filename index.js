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
})