const mongoose  = require("mongoose")

const UserSchema = mongoose.Schema({
blogname: { type: String },
heading: { type: String, require: true },
des: { type: String, require: true },
imgURL: { type: String, require: true },
date: { type: String,},
like:{type:Number,default:0}
});
const BLogModel = mongoose.model("BlogData", UserSchema);
module.exports = BLogModel;