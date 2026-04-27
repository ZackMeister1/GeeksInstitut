// ici on va créer les routes pour les utilisateurs, y compris la route pour créer Yasmine avec une adresse intégrée.

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Exercise 1: Create Yasmine with embedded address 
router.post('/create', async (req, res) => {

    try {
        const user = await User.create({
            name: "Yasmine",
            email: "yasmine@tech.ma",
            address: {
                city: "Casablanca",
                country: "Morocco",
                postalCode: "20000"
            }
        });

        res.json(user);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

module.exports = router;


