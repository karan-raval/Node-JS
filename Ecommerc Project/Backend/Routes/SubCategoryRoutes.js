const { Router } = require("express");
const {
    addSubCategory,
    getAllSubCategories,
    getSubCategoriesByCategory,
    getSubCategoriesByAdmin,
    updateSubCategory,
    deleteSubCategory
} = require("../Controller/SubCategoryController");
const isAdmin = require("../Middleware/isAdmin");

const SubCategoryRoute = Router();

SubCategoryRoute.post("/subcategory", isAdmin, addSubCategory);

SubCategoryRoute.get("/subcategories", isAdmin, getAllSubCategories);

SubCategoryRoute.get("/subcategories/:categoryId", isAdmin, getSubCategoriesByCategory);

SubCategoryRoute.get("/subcategoriesByAdmin", isAdmin, getSubCategoriesByAdmin);

SubCategoryRoute.put("/subcategory/:id", isAdmin, updateSubCategory);

SubCategoryRoute.delete("/subcategory/:id", isAdmin, deleteSubCategory);

module.exports = SubCategoryRoute;
