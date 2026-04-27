//  Exercise 1: Multiple Exports and Import using CommonJS syntax

// Create an array of product objects
const products = [
    {
        name: "Laptop",
        price: 1200,
        category: "Electronics"
    },
    {
        name: "Phone",
        price: 800,
        category: "Electronics"
    },
    {
        name: "Shoes",
        price: 100,
        category: "Fashion"
    },
    {
        name: "Watch",
        price: 250,
        category: "Accessories"
    },
    {
        name: "Camera",
        price: 500,
        category: "Electronics"
    }
    
];

// Export the array using CommonJS syntax
// module.exports allows other files to use this data
module.exports = products;
