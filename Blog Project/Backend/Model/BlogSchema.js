const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    image: { type: String },
    category: { type: String },
    like: { type: Number, default: 0 },
    likedBy: { type: [mongoose.Schema.Types.ObjectId], ref: 'User', default: [] },
    userId: { type: mongoose.Types.ObjectId, require: true, ref: "users" },
    date: { type: String,},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const BlogModel = mongoose.model("blogs", BlogSchema);

module.exports = BlogModel;
