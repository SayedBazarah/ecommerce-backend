//Database Connection Setup
const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: Number,
  weight: Number,
  thumbnail: String,
  images: [String],
  category: String,
  "create-date": String,
  stock: Number,
  description: {
    short: String,
    long: String,
  },
  reviews: [{ rate: Number, comment: String }],
  seo: {
    "meta-description": String,
    slug: String,
  },
});

const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;
