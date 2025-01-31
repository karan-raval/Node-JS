// backend/controllers/recipeController.js
const Recipe = require('../models/Recipe');

// Create a new recipe
const createRecipe = async (req, res) => {
  const { title, description, ingredients, steps, category } = req.body;

  try {
    const recipe = new Recipe({
      title,
      description,
      ingredients,
      steps,
      category,
      user: req.user,  // Associate the recipe with the logged-in user
    });

    await recipe.save();
    res.status(201).json(recipe);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Fetch all recipes
const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate('user', 'name email');
    res.json(recipes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { createRecipe, getAllRecipes };
