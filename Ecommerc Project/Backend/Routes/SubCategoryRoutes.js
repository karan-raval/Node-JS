const {Router} = require("express")
const SubCategoryModel = require("../Model/SubCategoryModel")
const isAdmin = require("../Middleware/isAdmin")

const SubCategoryRoute = Router()

SubCategoryRoute.post("/subCategory",isAdmin,async (req, res) => {
    try {
        const { name, category } = req.body;

        const existingSubCategory = await SubCategoryModel.findOne({ name, category });
        if (existingSubCategory) {
            return res.status(400).json({ message: "Subcategory already exists in this category" });
        }

        // Create subcategory
        const subCategory = await SubCategoryModel.create({ name, category });

        res.status(201).json({ message: "Subcategory created successfully", subCategory });
    } catch (error) {
        res.status(500).json({ message: "Error creating subcategory", error: error.message });
    }
})

SubCategoryRoute.get("/subCategories",isAdmin,async (req, res) => {
    try {
        const subCategories = await SubCategoryModel.find().populate("category", "name");
        res.status(200).json(subCategories);
    } catch (error) {
        res.status(500).json({ message: "Error fetching subcategories", error: error.message });
    }
})

SubCategoryRoute.get("/subCategory/:categoryId",isAdmin,async (req, res) => {
    try {
        const { id } = req.params;
        const { name, category } = req.body;

        const subCategory = await SubCategoryModel.findByIdAndUpdate(
            id,
            { name, category },
            { new: true }
        ).populate("category", "name");

        if (!subCategory) {
            return res.status(404).json({ message: "Subcategory not found" });
        }

        res.status(200).json({ message: "Subcategory updated successfully", subCategory });
    } catch (error) {
        res.status(500).json({ message: "Error updating subcategory", error: error.message });
    }
})

SubCategoryRoute.delete("/subCategory/:id",isAdmin,async (req, res) => {
    try {
        const { id } = req.params;
        const subCategory = await SubCategoryModel.findByIdAndDelete(id);

        if (!subCategory) {
            return res.status(404).json({ message: "Subcategory not found" });
        }

        res.status(200).json({ message: "Subcategory deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting subcategory", error: error.message });
    }
});

module.exports = SubCategoryRoute