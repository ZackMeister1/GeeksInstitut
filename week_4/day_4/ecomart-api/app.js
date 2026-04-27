// The Daily Challenge: "EcoMart" Launch

// Objective: Build a simple RESTful API for an e-commerce platform called "EcoMart" using Node.js, Express, and MongoDB. The API will allow users to perform CRUD operations on products

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes 
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Connect MongoDB 
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected successfully"))
    .catch(err => console.log(err));

// Start server 
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});



