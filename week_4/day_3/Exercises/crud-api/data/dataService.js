// Exercise 3: Building a Basic CRUD API with Express and Axios using a Data Module

// Objective: Create a simple Express server that fetches data from an external API using Axios, organized through a separate data module

// Import axios
const axios = require('axios');

// Function to fetch posts from external API
async function fetchPosts() {
    try {
        // Make GET request to JSONPlaceholder API
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

        // Return the data (array of posts)
        return response.data;

    } catch (error) {
        // Handle error
        console.error("Error fetching posts:", error.message);
        throw error; // rethrow so app.js can handle it
    }
}

// Export the function
module.exports = { fetchPosts };


