const { Router } = require("express");
const {
    addCategory,
    getAllCategories,
    getCategoriesByAdmin,
    updateCategory,
    deleteCategory
} = require("../Controller/CategoryController");
const isAdmin = require("../Middleware/isAdmin");

const CategoryRoute = Router();

// Add a category (Admin only)
CategoryRoute.post("/category", isAdmin, addCategory);

// Get all categories (Public)
CategoryRoute.get("/categories", getAllCategories);

// Get categories added by logged-in admin
CategoryRoute.get("/categoriesByAdmin", isAdmin, getCategoriesByAdmin);

// Update a category (Only admin who created it)
CategoryRoute.put("/category/:id", isAdmin, updateCategory);

// Delete a category (Only admin who created it)
CategoryRoute.delete("/category/:id", isAdmin, deleteCategory);

module.exports = CategoryRoute;
