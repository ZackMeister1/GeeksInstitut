// N.B. This file contains the routes for the "EcoMart" API, which allows users to manage products in an e-commerce platform.

const express = require("express");
const router = express.Router();
const Product = require("../models/Product.js");

// Task 1: Add products to the database
router.post("/seed", async (req, res) => {
  try {
    const products = [
      { name: "Laptop", price: 1200, category: "Electronics", stock: 100 }, // high stock
      { name: "Headphones", price: 150, category: "Electronics", stock: 8 },
      { name: "Notebook", price: 5, category: "Stationery", stock: 50 },
      { name: "Chair", price: 80, category: "Home", stock: 20 },
      { name: "Pen", price: 2, category: "Stationery", stock: 3 }, // low stock
    ];

    await Product.insertMany(products);

    res.json({ message: "Products added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//
// Task 2: Low stock (<10) products
//
router.get("/low-stock", async (req, res) => {
  try {
    // Equivalent to: db.products.find({ stock: { $lt: 10 } })
    const lowStock = await Product.find({ stock: { $lt: 10 } });

    res.json(lowStock);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//
// Task 3: Increase Electronics price by 10%
//
router.put("/increase-price", async (req, res) => {
  try {
    await Product.updateMany(
      { category: "Electronics" },
      { $mul: { price: 1.1 } }, // multiply by 1.1 (10% increase)
    );

    res.json({ message: "Prices updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Final: Most expensive product
router.get("/most-expensive", async (req, res) => {
  try {
    const product = await Product.find().sort({ price: -1 }).limit(1);

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;


