// Exercise 1: Building a RESTful API

// Objective: Create a simple RESTful API for managing blog posts using Express.js
// Import express
const express = require('express');

// Create Express app
const app = express();

// Middleware to parse JSON (important for POST & PUT)
app.use(express.json());


// Simulated database (array of blog posts)
let posts = [
    {
        id: 1,
        title: "First Post",
        content: "This is my first blog post"
    },
    {
        id: 2,
        title: "Second Post",
        content: "This is my second blog post"
    }
];


// GET /posts ==> get all posts
app.get('/posts', (req, res) => {
    res.json(posts); // return all posts as JSON
});


// GET /posts/:id ==> get one post by ID
app.get('/posts/:id', (req, res) => {

    // Convert id from string to number
    const id = parseInt(req.params.id);

    // Find post
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
});


// POST /posts ==> create new post
app.post('/posts', (req, res) => {

    // Get data from request body
    const { title, content } = req.body;

    // Basic validation
    if (!title || !content) {
        return res.status(400).json({ message: "Title and content are required" });
    }

    // Create new post
    const newPost = {
        id: posts.length + 1, // simple ID generation
        title,
        content
    };

    // Add to array
    posts.push(newPost);

    res.status(201).json(newPost);
});


// PUT /posts/:id ==> update post
app.put('/posts/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }

    // Update values if provided in request body
    const { title, content } = req.body;

    if (title) post.title = title;
    if (content) post.content = content;

    res.json(post);
});


// DELETE /posts/:id ==> delete post
app.delete('/posts/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const index = posts.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Post not found" });
    }

    // Remove post from array using splice
    posts.splice(index, 1);

    res.json({ message: "Post deleted successfully" });
});


// Handle invalid routes (404)
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});


// Global error handler (optional but good practice)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Server error" });
});


// Start server on port 3000
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});






