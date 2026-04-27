// ici on va créer le modèle pour les utilisateurs, y compris un champ d'adresse imbriqué pour stocker les informations d'adresse de l'utilisateur directement dans le document utilisateur.

const mongoose = require('mongoose');

// Nested address object (embedded)
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: {
        city: String,
        country: String,
        postalCode: String
    }
});

module.exports = mongoose.model('User', userSchema);


