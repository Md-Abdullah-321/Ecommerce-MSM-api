const data = require('../data.js');
const User = require('../models/user.model.js');

const seedUser = async (req, res, next) => {
    try {
        //delete all existing users:
        await User.deleteMany({});

        //inserting new users:
        const users = await User.insertMany(data.users);

        //successfull response:
        return res.status(201).json(users);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    seedUser
}