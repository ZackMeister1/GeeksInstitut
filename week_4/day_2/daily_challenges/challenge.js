import greet from './greeting.js'; // this will break because greeting.js is CommonJS, but we are using ES modules here
import { showMessage } from './colorful-message.js';
import { readFileContent } from './read-file.js';

// PROBLEM:
// greeting.js is CommonJS, but we are using ES modules here
// FIX: change greeting.js to ES module 
// Import all modules (ES6 syntax)

// Objective: Use all the functionalities from the previous challenges in one file

// Greeting
console.log(greet("Jamie"));

// Colorful message
showMessage();

// Read file content
readFileContent();
