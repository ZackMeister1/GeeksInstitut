// Exercise 1: Multiple Exports and Import using CommonJS syntax

// Import (require) the products from products.js
const products = require('./products'); // './' means same folder

// Create a function to search for a product by name
function findProduct(productName) {

    // We use the built-in array method "find"
    const product = products.find(p => 
        p.name.toLowerCase() === productName.toLowerCase()
    );
    // Explanation:
    // - p => ... is an arrow function
    // - we compare names in lowercase to avoid case issues

    // Check if product exists
    if (product) {
        console.log("Product found:");
        console.log(product);
    } else {
        console.log("Product not found:", productName);
    }
}

// Call the function with different product names
findProduct("Laptop");   // should find
findProduct("Shoes");    // should find
findProduct("Tablet");   // should NOT find
findProduct("watch");    // should find (case insensitive)
findProduct("Camera");   // should NOT find
