const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({
    name:String,
    coursename:String,
    grid:Number,
})

const studentSchema = mongoose.model("studentData",studentSchema)

module.exports = studentSchema

