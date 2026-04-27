// Exercises xp: Lab: Designing a Scalable System

// Objective is to create a simple Express.js application that connects to a MongoDB database. The application will have two main routes: one for managing users and another for managing orders. Each route will have basic CRUD operations.

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// Routes 
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// Connect MongoDB 
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Start server 
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});


// What We Just Built: Embedding (User)  ==>  address: { city, country, postalCode }

// Referencing (Order)  ==>  userId: ObjectId
// 
// 
// 
// 1) Pourquoi intégrer l'adresse ? 

// Parce qu'elle est petite et toujours nécessaire avec l'utilisateur. Cela nous permet également de récupérer l'utilisateur et son adresse en une seule requête, ce qui peut améliorer les performances pour les opérations de lecture.


// 2) Why reference the order?

// Réponse : Parce que les commandes peuvent croître indéfiniment et nous ne voulons pas les stocker à l'intérieur du document utilisateur. De plus, nous pourrions vouloir accéder aux commandes sans avoir besoin des informations de l'utilisateur. En limitant la taille du document de commande à 16 Mo, qui est la taille maximale pour un document MongoDB, nous pouvons nous assurer de ne pas dépasser les limites de MongoDB et de pouvoir gérer les grandes commandes sans problèmes.
