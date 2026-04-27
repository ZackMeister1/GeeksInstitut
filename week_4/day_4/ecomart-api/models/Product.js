// objective here is to build a simple RESTful API for an e-commerce platform called "EcoMart" using Node.js, Express, and MongoDB. The API will allow users to perform CRUD operations on products


const mongoose = require('mongoose');

// Define schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    stock: Number
});

// Export model
module.exports = mongoose.model('Product', productSchema);



