// Exercise 3: Building a Basic CRUD API with Express and Axios using a Data Module

// Objective: Create a simple Express server that fetches data from an external API using Axios, organized through a separate data module

// Import express
const express = require('express');

// Create express app
const app = express();

// Import data module
const { fetchPosts } = require('./data/dataService');

// Middleware (optional here, but good practice to include)
app.use(express.json());

// Start server on port 5000
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


// CREATE ENDPOINT
app.get('/api/posts', async (req, res) => {
    try {
        // Call function from data module
        const posts = await fetchPosts();

        // Send response to client with status 200 and posts data
        res.status(200).json(posts);

        // Log success message to console
        console.log("Posts fetched and sent successfully!");

    } catch (error) {
        // Handle error properly and send error response
        res.status(500).json({ message: "Error retrieving posts" });
    }
});

// So I can get requests to http://localhost:5000/api/posts using Postman

// Critical Thinking : our current API:
// Works But not truly CRUD
// Why?
// I only implemented READ (GET) No POST, PUT, DELETE
// Also: I depend on an external API (no control over data)
// No caching ==> slow if API is slow