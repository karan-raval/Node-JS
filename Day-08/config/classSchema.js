const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({
    name:String,
    coursename:String,
    grid:Number,
})

const StudentModel = mongoose.model("studentData",studentSchema)

module.exports = StudentModel

