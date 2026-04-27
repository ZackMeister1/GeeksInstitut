// // Task 1 utilise CommonJS (require), donc pas besoin de "type": "module" dans package.json

// // Import greet function
// const greet = require('./greeting');

// // Use the function
// const message = greet("Jamie");

// // Display result
// console.log(message);


// Task 2 utilise ES Modules (import), donc "type": "module" est nécessaire dans package.json

// Import function from colorful-message.js
import { showMessage } from './colorful-message.js';

// Call the function
showMessage();

