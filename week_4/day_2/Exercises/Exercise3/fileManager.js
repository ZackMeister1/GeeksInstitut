//  Exercise 3: File Management using CommonJS syntax


// Import the fs module
const fs = require('fs'); // fs is built-in Node.js module for file operations

// a: Function to read a file
function readFile(filePath) {
    try {
        // fs.readFileSync reads the file synchronously
        const content = fs.readFileSync(filePath, 'utf8'); 
        console.log(`Content of "${filePath}":`);
        console.log(content);
        return content;
    } catch (err) {
        console.error(`Error reading file "${filePath}":`, err.message);
    }
}

// b: Function to write to a file
function writeFile(filePath, content) {
    try {
        // fs.writeFileSync writes content to a file synchronously
        fs.writeFileSync(filePath, content, 'utf8'); 
        console.log(`Successfully wrote to "${filePath}"`);
    } catch (err) {
        console.error(`Error writing file "${filePath}":`, err.message);
    }
}

// c: Export the functions using CommonJS syntax
module.exports = {
    readFile,
    writeFile
};
