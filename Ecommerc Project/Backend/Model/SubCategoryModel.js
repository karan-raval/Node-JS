const mongoose = require('mongoose')

const SubCategorySchema = mongoose.Schema({
    subcategory: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    createdBy: {  // Store the admin (user) who created the subcategory
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",  // Reference to the User model
        required: true
    }
}, {
    timestamps: true,

})

const SubCategoryModel = mongoose.model("Sub-Category", SubCategorySchema)


module.exports = SubCategoryModel