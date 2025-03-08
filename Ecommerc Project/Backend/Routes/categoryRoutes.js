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

CategoryRoute.post("/category", isAdmin, addCategory);

CategoryRoute.get("/categories", isAdmin, getAllCategories);

CategoryRoute.get("/categoriesByAdmin", isAdmin, getCategoriesByAdmin);

CategoryRoute.put("/category/:id", isAdmin, updateCategory);

CategoryRoute.delete("/category/:id", isAdmin, deleteCategory);

module.exports = CategoryRoute;
