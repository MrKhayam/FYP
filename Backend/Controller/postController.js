const asyncHandler = require('express-async-handler');
const Posts = require('../Models/postModel')
const uploadPost = asyncHandler(async (req, res) => {
    const { caption, content } = req.body;
    try {
        const newPost = await Posts.create({
            user: req.user._id,
            caption,
            content
        });
        res.send(newPost)
    } catch (error) {
        throw new Error(error)
    }
});


module.exports = {
    uploadPost,
}