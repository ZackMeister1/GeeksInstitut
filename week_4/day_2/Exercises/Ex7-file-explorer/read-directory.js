// Exercise 7: Reading and Copying Files

// Objective: Create a simple file explorer that lists all files in a directory and allows the user to copy a selected file to another location.

// Import fs module
const fs = require('fs');

// Define directory path (current folder)
const directoryPath = './';

// Read all files in the directory
fs.readdir(directoryPath, (err, files) => {
    // Handle error
    if (err) {
        console.error("Error reading directory:", err);
        return;
    }

    console.log("Files in directory:");

    // Loop through files and print names
    files.forEach(file => {
        console.log(file);
    });
});


