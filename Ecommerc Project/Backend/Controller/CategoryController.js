const CategoryModel = require("../Model/CategoryModel");

const addCategory = async (req, res) => {
    try {
        const { name } = req.body;

        const existingCategory = await CategoryModel.findOne({ name });
        if (existingCategory) {
            return res.status(400).json({ message: "Category already exists" });
        }

        const category = await CategoryModel.create({
            name,
            createdBy: req.user.id
        });

        res.status(201).json({ message: "Category created successfully", category });
    } catch (error) {
        res.status(500).json({ message: "Error creating category", error: error.message });
    }
};

const getAllCategories = async (req, res) => {
    try {
        const categories = await CategoryModel.find()
            .populate("createdBy", "name email");

        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: "Error fetching categories", error: error.message });
    }
};

const getCategoriesByAdmin = async (req, res) => {
    try {
        const categories = await CategoryModel.find({ createdBy: req.user.id });

        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: "Error fetching categories", error: error.message });
    }
};

const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const category = await CategoryModel.findOne({ _id: id, createdBy: req.user.id });

        if (!category) {
            return res.status(404).json({ message: "Category not found or not authorized" });
        }

        category.name = name;
        await category.save();

        res.status(200).json({ message: "Category updated successfully", category });
    } catch (error) {
        res.status(500).json({ message: "Error updating category", error: error.message });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;

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
