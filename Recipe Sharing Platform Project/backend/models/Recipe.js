// backend/models/Recipe.js
const mongoose = require('mongoose');

// Recipe schema definition
const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],  // Change this to an array of strings
        required: true,
    },
    steps: {
        type: [String],  // Change this to an array of strings
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

module.exports = mongoose.model('Recipe', recipeSchema);
