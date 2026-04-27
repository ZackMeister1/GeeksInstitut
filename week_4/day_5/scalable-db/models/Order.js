// ici on va créer le modèle pour les commandes, y compris une référence à l'utilisateur qui a passé la commande. Cela permettra de lier les commandes aux utilisateurs dans la base de données MongoDB.

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderNumber: String,
    total: Number,
    currency: String,
    status: String,

    // Reference to User
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Order', orderSchema);


