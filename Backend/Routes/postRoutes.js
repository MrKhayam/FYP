const express = require('express');
const { uploadPost } = require('../Controller/postController');
const authMiddleware = require('../Middlewares/authMiddleware');

const router = express.Router();


router.post('/upload-post', authMiddleware, uploadPost);