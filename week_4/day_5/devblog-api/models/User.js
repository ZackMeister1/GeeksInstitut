// Here we define the User model with an embedded socialLinks object, which is a common pattern in MongoDB for related data that doesn't require a separate collection

const mongoose = require('mongoose');

// Step 1: Users collection with embedded socialLinks object (not separate collection)
const userSchema = new mongoose.Schema({
    username: String,
    bio: String,

    // Embedded object (not separate collection) for social links
    socialLinks: {
        twitter: String,
        github: String
    }
});

module.exports = mongoose.model('User', userSchema);


