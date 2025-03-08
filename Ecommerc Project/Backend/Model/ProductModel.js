const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: [true, "Title is required"] },
    desc: { type: String, required: [true, "Description is required"] },
    price: { 
        type: Number, 
        required: [true, "Price is required"], 
        min: [0, "Price cannot be negative"] 
    },
    images: { 
        type: [String], 
        required: [true, "At least one image is required"], 
        validate: {
            validator: function(images) {
                return images.length > 0; // Ensure at least one image is present
            },
            message: "At least one image URL is required"
        }
    },
    stock: { 
        type: Number, 
        required: [true, "Stock is required"], 
        min: [0, "Stock cannot be negative"] 
    },
    category: { type: mongoose.Types.ObjectId, ref: "Category", required: true },
    subcategory: { type: mongoose.Types.ObjectId, ref: "SubCategory", required: true },
    brand: { type: mongoose.Types.ObjectId, ref: "Brand", required: true },
    createdBy: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    ratings: { 
        type: Number, 
        default: 0, 
        min: [0, "Ratings cannot be negative"], 
        max: [5, "Ratings cannot exceed 5"]
    },
    createdAt: { type: Date, default: Date.now }
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
