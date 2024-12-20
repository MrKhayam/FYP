const asyncHandler = require('express-async-handler');
const user = require('../Models/userModel');
const bcrypt = require('bcrypt');


const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
        res.status(401);
        throw new Error("Please fill all the fields.");
    }
    else {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);
        const checkMail = await user.findOne({ email });
        if (checkMail) {
            res.status(401);
            throw new Error("Email already exists!");
        }
        try {
            const createdUser = await user.create({
                firstName,
                lastName,
                email,
                password: hashedPass
            });
            res.send(createdUser);
        } catch (error) {
            throw new Error(error);
        }
    }

});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(401);
        throw new Error("Please fill all the fields.");
    }
    else {
        const findMail = await user.findOne({ email });
        if (!findMail) {
            res.status(404);
            throw new Error("Invalid Email!");
        } else {
            const matchPass = await bcrypt.compare(password, findMail.password);
            if (!matchPass) {
                res.status(401);
                throw new Error("Incorrect Password!");
            } else {
                res.send(findMail);
            }
        }
    }
});

const findMyProfile = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const findUser = await user.findOne({ _id: id });
    if (!findUser) {
        res.status(404);
        throw new Error("User not Found!");
    } else {
        res.send(findUser);
    }
});


const generateToken = (id) => {
    
}


module.exports = {
    registerUser,
    loginUser,
    findMyProfile,
}