const { Router } = require("express");
const {
    addCategory,
    getAllCategories,
    updateCategory,
    deleteCategory
} = require("../Controller/CategoryController");
const isAdmin = require("../Middleware/isAdmin");

const CategoryRoute = Router();

CategoryRoute.post("/category", isAdmin, addCategory);

CategoryRoute.get("/categories", getAllCategories);

CategoryRoute.put("/category/:id", isAdmin, updateCategory);

CategoryRoute.delete("/category/:id", isAdmin, deleteCategory);

module.exports = CategoryRoute;
