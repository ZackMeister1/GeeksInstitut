// ici on va créer les routes pour les commandes, y compris la route pour créer une commande liée à un utilisateur.

const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Exercise 2: Create order linked to user
router.post('/create', async (req, res) => {

    try {
        // Step A: Get userId from Postman body
        const { userId } = req.body;

        const order = await Order.create({
            orderNumber: "ORD-99X",
            total: 1500,
            currency: "MAD",
            status: "Processing",
            userId: userId // reference
        });

        res.json(order);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all orders
router.get('/', async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
});

// 🔥 Optional: populate user data
router.get('/with-user', async (req, res) => {

    const orders = await Order.find().populate('userId');

    res.json(orders);
});

module.exports = router;


