const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema({
  name: "string",
  description: "string",
  thumbnail: "string",
  seo: {
    "meta-description": String,
    slug: String,
  },
});

const CategoriesModel = mongoose.model("Categories", CategoriesSchema);

module.exports = CategoriesModel;
