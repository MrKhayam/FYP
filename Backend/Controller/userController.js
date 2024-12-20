const asyncHandler = require('express-async-handler');
const user = require('../Models/userModel');


const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
        res.status(401);
        throw new Error("Please fill all the fields.");
    }
    else {
        try {
            const createdUser = await user.create({
                firstName,
                lastName,
                email,
                password
            });
            res.send(createdUser);
        } catch (error) {
            throw new Error(error);
        }
    }

});
const loginUser = asyncHandler(async (req, res) => {
    res.send("User Logged In.");
});
const findMyProfile = asyncHandler(async (req, res) => {
    res.send("Profile Triggered.");
});


module.exports = {
    registerUser,
    loginUser,
    findMyProfile,
}