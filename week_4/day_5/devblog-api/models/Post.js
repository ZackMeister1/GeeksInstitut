// Here we define the Post model, which includes a reference to the User model (authorId) and an embedded comments array. This demonstrates both referencing and embedding in MongoDB, which are key concepts in designing a NoSQL database schema for a blogging platform like "DevBlog".

const mongoose = require('mongoose');

// Step 3: Embedded comments schema (embedded in Post)
const commentSchema = new mongoose.Schema({
    username: String,
    text: String,
    date: {
        type: Date,
        default: Date.now
    }
});

// Step 2: Posts collection with reference to User (authorId) and embedded comments
const postSchema = new mongoose.Schema({
    title: String,
    body: String,

    // Reference to User (IMPORTANT) - this creates a relationship between Post and User collections
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    tags: [String],

    // Embedded comments array - this is a common pattern for data that is closely related to the parent document and doesn't require its own collection
    comments: [commentSchema]
});

module.exports = mongoose.model('Post', postSchema);


