const mongoose = require('mongoose')

const SubCategorySchema = mongoose.Schema({
    subcategory: {
        type: String,
        required: true,
        trim: true,
        unique:true
        

    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
}, {
    timestamps: true,

})

const SubCategoryModel = mongoose.model("Sub-Category",SubCategorySchema)


module.exports = SubCategoryModel