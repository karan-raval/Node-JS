const mongoose = require("mongoose")

const CategorySchema = mongoose.Schema({
    category : {type : String,require : true, unique:true}
})

const CategoryModel = mongoose.model("Category",CategorySchema)


module.exports = CategoryModel