// Exercise 2: Building a Basic CRUD API with Express.js
// Objective: Create a simple RESTful API for managing a collection of books using Express.js. The API will support basic CRUD operations (Create, Read, Update, Delete).

// Import express 
const express = require('express');

// Create an instance of express app
const app = express();

// (important): Middleware to parse JSON body
app.use(express.json());

// Create a basic data array (books)
let books = [
    {
        id: 1,
        title: "Atomic Habits",
        author: "James Clear",
        publishedYear: 2018
    },
    {
        id: 2,
        title: "The Alchemist",
        author: "Paulo Coelho",
        publishedYear: 1988
    },
    {
        id: 3,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        publishedYear: 1997
    }
];

// Start server on port 5000 
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// READ ALL BOOKS 
app.get('/api/books', (req, res) => {
    // Send all books as JSON
    res.status(200).json(books);
});


// READ ONE BOOK BY ID 
app.get('/api/books/:bookId', (req, res) => {

    // Extract id from URL params
    const bookId = parseInt(req.params.bookId);

    // Find the book
    const book = books.find(b => b.id === bookId);

    // If found
    if (book) {
        res.status(200).json(book);
    } else {
        // If not found
        res.status(404).json({ message: "Book not found" });
    }
});


// CREATE NEW BOOK 
app.post('/api/books', (req, res) => {

    // Get data from request body
    const { title, author, publishedYear } = req.body;

    // Create new book object
    const newBook = {
        id: books.length + 1, // simple auto-increment
        title,
        author,
        publishedYear
    };

    // Add to array
    books.push(newBook);

    // Return created book
    res.status(201).json(newBook);
});



