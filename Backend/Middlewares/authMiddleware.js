const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const user = require('../Models/userModel');


const authMiddleware = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await user.findById(decode.id);
            next();
        } catch (error) {
            throw new Error("Wrong Token");
        }
    } else {
        throw new Error("No Token Found!");
    }
});


module.exports = authMiddleware;