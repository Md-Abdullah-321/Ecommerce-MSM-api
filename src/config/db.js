const mongoose = require("mongoose");
const { options } = require("../app");
require("dotenv").config();
const Database_URL = process.env.DATABASE;

const connectionDB = async (options = {}) => {
    try {
        await mongoose.connect(Database_URL);
        console.log('Database Connected');

        mongoose.connection.on('error', (err) => {
            console.error('DB Connection Error');
        })
    } catch (error) {
        console.error("Could not connect to DB", error.toString());
    }
}

module.exports = connectionDB;