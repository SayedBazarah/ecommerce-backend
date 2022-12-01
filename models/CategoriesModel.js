const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema(
  {
    name: "string",
    description: "string",
    cover: "string",
    seo: {
      "meta-description": String,
      slug: String,
    },
  },
  {
    required: ["name", "description"],
  }
);

const CategoriesModel = mongoose.model("Categories", CategoriesSchema);

module.exports = CategoriesModel;
