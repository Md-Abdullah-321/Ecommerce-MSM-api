const express = require('express');
const { seedUser } = require('../controllers/seed.controllers.js');
const seedRouter = express.Router();

seedRouter.get('/users', seedUser);


module.exports = {seedRouter};