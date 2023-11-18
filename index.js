/*
 * Title:  
 * Description: 
 * Author: 
 * Date: 09/12/23
 */


const express = require("express");
const app = express();
require("dotenv").config();



const PORT = process.env.PORT;
app.get("/", (req, res) => {
    res.json("Hello World!")
})

app.listen(PORT, (err) => {
    console.log(`Server running on port ${PORT}`);
})