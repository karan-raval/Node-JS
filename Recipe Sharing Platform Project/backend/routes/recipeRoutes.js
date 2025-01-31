// backend/routes/recipeRoutes.js
const express = require('express');
const { createRecipe, getAllRecipes } = require('../controllers/recipeController');
const protect = require('../middleware/authMiddleware');  // Protect routes
const router = express.Router();

// Create a new recipe (protected route)
router.post('/create', protect, createRecipe);

// Get all recipes
router.get('/', getAllRecipes);

module.exports = router;
