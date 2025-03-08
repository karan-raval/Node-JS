const SubCategoryModel = require("../Model/SubCategoryModel");

// ✅ Add a new subcategory (Admin only)
const addSubCategory = async (req, res) => {
    try {
        const { name, category } = req.body;

        // Check if the subcategory already exists in the given category
        const existingSubCategory = await SubCategoryModel.findOne({ name, category });

        if (existingSubCategory) {
            return res.status(400).json({ message: "Subcategory already exists in this category" });
        }

        // Create subcategory and store admin's ID
        const subCategory = await SubCategoryModel.create({
            name,
            category,
            createdBy: req.user.id // Store admin's ID
        });

        res.status(201).json({ message: "Subcategory created successfully", subCategory });
    } catch (error) {
        res.status(500).json({ message: "Error creating subcategory", error: error.message });
    }
};

// ✅ Get all subcategories (with category & admin details)
const getAllSubCategories = async (req, res) => {
    try {
        const subCategories = await SubCategoryModel.find()
            .populate("category", "name") // Populate category details
            .populate("createdBy", "name email"); // Populate admin details

        res.status(200).json(subCategories);
    } catch (error) {
        res.status(500).json({ message: "Error fetching subcategories", error: error.message });
    }
};

// ✅ Get subcategories by category ID
const getSubCategoriesByCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const subCategories = await SubCategoryModel.find({ category: categoryId });

        res.status(200).json(subCategories);
    } catch (error) {
        res.status(500).json({ message: "Error fetching subcategories", error: error.message });
    }
};

// ✅ Get subcategories added by the logged-in admin
const getSubCategoriesByAdmin = async (req, res) => {
    try {
        const subCategories = await SubCategoryModel.find({ createdBy: req.user.id })
            .populate("category", "name");

        res.status(200).json(subCategories);
    } catch (error) {
        res.status(500).json({ message: "Error fetching subcategories", error: error.message });
    }
};

// ✅ Update a subcategory (Only creator admin)
const updateSubCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, category } = req.body;

        // Find the subcategory and check if the logged-in admin created it
        const subCategory = await SubCategoryModel.findOne({ _id: id, createdBy: req.user.id });

        if (!subCategory) {
            return res.status(404).json({ message: "Subcategory not found or not authorized" });
        }

        // Update subcategory details
        subCategory.name = name;
        subCategory.category = category;
        await subCategory.save();

        res.status(200).json({ message: "Subcategory updated successfully", subCategory });
    } catch (error) {
        res.status(500).json({ message: "Error updating subcategory", error: error.message });
    }
};

// ✅ Delete a subcategory (Only creator admin)
const deleteSubCategory = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the subcategory and check if the logged-in admin created it
        const subCategory = await SubCategoryModel.findOneAndDelete({ _id: id, createdBy: req.user.id });

        if (!subCategory) {
            return res.status(404).json({ message: "Subcategory not found or not authorized" });
        }

        res.status(200).json({ message: "Subcategory deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting subcategory", error: error.message });
    }
};

// ✅ Export all functions
module.exports = {
    addSubCategory,
    getAllSubCategories,
    getSubCategoriesByCategory,
    getSubCategoriesByAdmin,
    updateSubCategory,
    deleteSubCategory
};
