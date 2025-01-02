const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');


// token
const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}


// signup
const signupUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.signup(name, email, password);
        const token = createToken(user._id);
        res.status(201).json({name,token});
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}



// login
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.status(201).json({email,token});
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports = {
    signupUser,
    loginUser
}