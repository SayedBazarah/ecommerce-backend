//Database Connection Setup
const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  weight: { type: Number, required: true },
  thumbnail: { type: String, required: true },
  images: [String],
  category: { type: String, required: true },
  "create-date": String,
  stock: { type: Number, required: true },
  description: {
    short: String,
    long: String,
  },
  reviews: [{ rate: Number, comment: String }],
  seo: {
    "meta-description": String,
  },
  slug: { type: String, required: true, unique: true },
});
//product-1.p
const ProductsModel = mongoose.model("Products", ProductsSchema);

module.exports = ProductsModel;
