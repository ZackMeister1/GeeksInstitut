// Exercise 5: Creating and Using a Custom Module
// objective: Create a custom math module and use it in your main application

// Import lodash and custom math module
const _ = require('lodash');       // lodash library
const math = require('./math');    // custom module in same folder

// Use math module functions
const sum = math.add(10, 5);         // 10 + 5 = 15
const product = math.multiply(10, 5); // 10 * 5 = 50

console.log("Custom math module results:");
console.log("Sum: ", sum);
console.log("Product: ", product);

// b: Use lodash functions
// Example: lodash to round a number
const roundedSum = _.round(sum / 3, 2); // sum divided by 3, rounded to 2 decimals
console.log("\nLodash utility results:");
console.log("Rounded sum divided by 3: ", roundedSum);

// Example: lodash to find max in array
const numbers = [10, 5, 8, 20, 15];
const maxNumber = _.max(numbers);
console.log("Maximum number in array: ", maxNumber);
