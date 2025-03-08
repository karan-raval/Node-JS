const mongoose = require("mongoose")

const CategorySchema = mongoose.Schema({
    category : {type : String,require : true, unique:true},
    createdBy: {type: mongoose.Schema.Types.ObjectId,ref: "User",required: true}
})

const CategoryModel = mongoose.model("Category",CategorySchema)


module.exports = CategoryModel