const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    stock: { type: Number, required: true, default: 0 }, 
    category: { type: mongoose.Types.ObjectId, ref: "Category", required: true }, 
    subcategory: { type: mongoose.Types.ObjectId, ref: "SubCategory", required: true }, 
    brand: { type: mongoose.Types.ObjectId, ref: "Brand", required: true }, 
    createdBy: { type: mongoose.Types.ObjectId, ref: "User", required: true }, 
    ratings: { type: Number, default: 0 }, 
    createdAt: { type: Date, default: Date.now } 
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
