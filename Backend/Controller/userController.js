const asyncHandler = require('express-async-handler');


const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

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