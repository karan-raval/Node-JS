const mongoose = require('mongoose')

const SubCategorySchema = mongoose.Schema({
    subcategory: { type: String, required: true, trim: true, unique: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, {
    timestamps: true,

})

const SubCategoryModel = mongoose.model("SubCategory", SubCategorySchema)


module.exports = SubCategoryModel