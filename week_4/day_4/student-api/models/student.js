// Objective: Create a model for the student data using Mongoose

const mongoose = require('mongoose');

// Define schema (structure of data)
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    major: String
});

// Export model
module.exports = mongoose.model('Student', studentSchema);



