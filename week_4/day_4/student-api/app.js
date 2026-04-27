// Exercise xp: Hands-On Lab: The Global Tech Academy

// Objective: Build a RESTful API for managing student data using Node.js, Express, and MongoDB Atlas

// Load environment variables
require('dotenv').config();

// Import modules and initialize app
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware to parse JSON 
app.use(express.json());

// Connect to MongoDB Atlas using Mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected ✅"))
    .catch(err => console.error("Connection error ❌", err));

// Routes 
const studentRoutes = require('./routes/studentRoutes');
app.use('/api/students', studentRoutes);

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



