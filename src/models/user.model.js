const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "User name is required"],
        trim: true,
        minlength: [3, 'The length of user name must be more that 2 character.'],
        maxlength: [31, 'The length of user name can be max 31 characters.'],
    },
    email: {
        type: String,
        required: [true, "User email is required"],
        trim: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        }
    },
    address: {
        type: String
    },
    phone: {
        type: String,
        validate: {
            validator: function (v) {
                return v.match(/^\+?[0-9]\d{1,20}$/);
            },
            message: "Please enter a valid phone number"
        }
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isBanned: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;