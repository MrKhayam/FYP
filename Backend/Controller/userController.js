const asyncHandler = require('express-async-handler');
const user = require('../Models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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
            res.json({
              id: createdUser.id,
              firstName: createdUser.firstName,
              lastName: createdUser.lastName,
              email: createdUser.email,
              password: createdUser.password,
              token: generateToken(createdUser._id),
            });
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
                res.json({
                  id: findMail.id,
                  firstName: findMail.firstName,
                  lastName: findMail.lastName,
                  email: findMail.email,
                  password: findMail.password,
                  token: generateToken(findMail._id),
                });
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
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });
}


module.exports = {
    registerUser,
    loginUser,
    findMyProfile,
}