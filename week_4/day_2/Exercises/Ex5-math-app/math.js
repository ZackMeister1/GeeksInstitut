// // Exercise 5: Creating and Using a Custom Module

// Objective: Create a custom math module and use it in your main application
// Export functions for addition and multiplication

// Addition function
function add(a, b) {
    return a + b;
}

// Multiplication function
function multiply(a, b) {
    return a * b;
}

// Export the functions using CommonJS
module.exports = {
    add,
    multiply
};
