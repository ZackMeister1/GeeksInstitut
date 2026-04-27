// Exercise 3: File Management using CommonJS syntax

// objective: Create a simple file manager that can read and write files using CommonJS syntax in Node.js

// Import functions from fileManager.js
const { readFile, writeFile } = require('./fileManager');

// a: Read content of "Hello World.txt"
readFile('Hello World.txt'); // should print: Hello World !!

// b: Write content to "Bye World.txt"
writeFile('Bye World.txt', 'Writing to the file');

// Optional: Verify writing by reading it back
readFile('Bye World.txt'); // should print: Writing to the file
