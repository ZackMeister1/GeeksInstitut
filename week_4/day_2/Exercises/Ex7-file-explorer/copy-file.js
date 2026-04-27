// copy-file.js

// Step 3: Import the built-in fs module
const fs = require('fs');

// Define source and destination file paths
const sourceFile = 'source.txt';
const destinationFile = 'destination.txt';

// Read the content of source.txt
fs.readFile(sourceFile, 'utf8', (err, data) => {
    // If error occurs while reading
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    // Write the content to destination.txt
    fs.writeFile(destinationFile, data, (err) => {
        // If error occurs while writing
        if (err) {
            console.error("Error writing file:", err);
            return;
        }

        // Success message
        console.log("File copied successfully!");
    });
});


