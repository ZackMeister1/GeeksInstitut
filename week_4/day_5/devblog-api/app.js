// The Daily Challenge: "DevBlog" Architecture

// Objective: Build a simple RESTful API for a blogging platform called "DevBlog" using Node.js, Express, and MongoDB. The API should allow users to create accounts, write blog posts, and view posts by other users.

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));

// MongoDB connection 
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Start server 
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});


