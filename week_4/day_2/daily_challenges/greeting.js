// // Define greet function
// Objective: Create a module that exports a function to greet users by name
// function greet(name) {
//     return `Hello, ${name}! Welcome to Node.js`;
// }

// // Export function using CommonJS
// module.exports = greet;


// greeting.js (UPDATED)

// Export as default (ES module)
export default function greet(name) {
    return `Hello, ${name}! Welcome to Node.js`;
}


