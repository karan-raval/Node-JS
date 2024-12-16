const mongoose = require("mongoose");
require("dotenv").config();
const connection = async () => {
  await mongoose.connect(process.env.mongo_url);
  console.log("Database Connected");
};

module.exports = connection;
