const CategoryModel = require("../Model/CategoryModel");

// ✅ Add a new category (Admin only)
const addCategory = async (req, res) => {
    try {
        const { name } = req.body;

        // Check if category already exists
        const existingCategory = await CategoryModel.findOne({ name });
        if (existingCategory) {
            return res.status(400).json({ message: "Category already exists" });
        }

        // Create category and store admin's ID
        const category = await CategoryModel.create({ 
            name, 
            createdBy: req.user.id // Store admin's ID 
        });

        res.status(201).json({ message: "Category created successfully", category });
    } catch (error) {
        res.status(500).json({ message: "Error creating category", error: error.message });
    }
};

// ✅ Get all categories (with admin info)
const getAllCategories = async (req, res) => {
    try {
        const categories = await CategoryModel.find()
            .populate("createdBy", "name email"); // Populate admin details

        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: "Error fetching categories", error: error.message });
    }
};

// ✅ Get categories added by the logged-in admin
const getCategoriesByAdmin = async (req, res) => {
    try {
        const categories = await CategoryModel.find({ createdBy: req.user.id });

        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: "Error fetching categories", error: error.message });
    }
};

// ✅ Update a category (Only admin who created it)
const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        // Find the category and check if the logged-in admin created it
        const category = await CategoryModel.findOne({ _id: id, createdBy: req.user.id });

        if (!category) {
            return res.status(404).json({ message: "Category not found or not authorized" });
        }

        // Update category name
        category.name = name;
        await category.save();

        res.status(200).json({ message: "Category updated successfully", category });
    } catch (error) {
        res.status(500).json({ message: "Error updating category", error: error.message });
    }
};

// ✅ Delete a category (Only admin who created it)
const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the category and check if the logged-in admin created it
        const category = await CategoryModel.findOneAndDelete({ _id: id, createdBy: req.user.id });

        if (!category) {
            return res.status(404).json({ message: "Category not found or not authorized" });
        }

        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting category", error: error.message });
    }
};

module.exports = {
    addCategory,
    getAllCategories,
    getCategoriesByAdmin,
    updateCategory,
    deleteCategory
};
