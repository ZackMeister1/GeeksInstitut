const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Create post (with reference to author)
router.post('/', async (req, res) => {

    const post = new Post(req.body);

    await post.save();

    res.json(post);
});

// Add comment (embedded) to post
router.post('/:id/comment', async (req, res) => {

    const post = await Post.findById(req.params.id);

    post.comments.push(req.body); // add new comment

    await post.save();

    res.json(post);
});

// Get posts with author info (populate)
router.get('/', async (req, res) => {

    const posts = await Post.find().populate('authorId');

    res.json(posts);
});

module.exports = router;


