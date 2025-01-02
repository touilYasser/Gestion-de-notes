const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    }
}, { timestamps: true })

userSchema.statics.signup = async function (name, email, password) {
    const exists = await this.findOne({ email })
    
    if(!name || !email || !password) {
        throw Error('All fields are required');
    }

    if (!validator.isEmail(email)) {
        throw Error('Email is not valid');
    }

    if (!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough');
    }

    if (exists) {
        throw Error('Email already in use');
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({ name, email, password: hash });
    return user;
    
}

userSchema.statics.login = async function (email, password) {
    if(!email || !password) {
        throw Error('All fields are required');
    }
    const user = await this.findOne({ email });
    if (!user) {
        throw error ("Incorrect email");
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw error ("Incorrect password");
    }
    return user;
}

module.exports = mongoose.model('User', userSchema);