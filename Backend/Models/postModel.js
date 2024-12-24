const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    caption: {
        type: String,
        required: false,
    },
    content: {
        type: String,
        required: false,
    },

}, {
    timestamps: true,
});


module.exports = mongoose.model('Post', postSchema);