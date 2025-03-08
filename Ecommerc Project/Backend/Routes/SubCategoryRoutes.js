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

// ✅ Add a subcategory (Admin only)
SubCategoryRoute.post("/subcategory", isAdmin, addSubCategory);

// ✅ Get all subcategories (Public)
SubCategoryRoute.get("/subcategories", getAllSubCategories);

// ✅ Get subcategories by category ID
SubCategoryRoute.get("/subcategories/:categoryId", getSubCategoriesByCategory);

// ✅ Get subcategories added by the logged-in admin
SubCategoryRoute.get("/subcategoriesByAdmin", isAdmin, getSubCategoriesByAdmin);

// ✅ Update a subcategory (Only creator admin)
SubCategoryRoute.put("/subcategory/:id", isAdmin, updateSubCategory);

// ✅ Delete a subcategory (Only creator admin)
SubCategoryRoute.delete("/subcategory/:id", isAdmin, deleteSubCategory);

module.exports = SubCategoryRoute;
