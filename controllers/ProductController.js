const ProductModel = require("../models/ProductModel");
const validator = require("../util/ProductValidator");

//CRUD Operations
const getAllProducts = async (req, res) => {
  const products = await ProductModel.find({});
  console.log("fetch in getAllProduct in Controller", products);
  res.json(products);
};
const getProductById = (req, res) => {
  res.json({ message: "Products End Point Work" });
};
const getProductBySlug = (req, res) => {
  res.json({ message: "Products End Point Work" });
};
const addProduct = (req, res) => {
  let product = new ProductModel(req.body);
  product
    .save()
    .then(() => res.send("Product Added"))
    .catch((err) => console.log("Error in add product controller" + err));
};
const updateProduct = (req, res) => {
  res.json({ message: "Products End Point Work" });
};
const deleteProduct = (req, res) => {
  res.json({ message: "Products End Point Work" });
};

module.exports = {
  getAllProducts,
  getProductById,
  getProductBySlug,
  addProduct,
  updateProduct,
  deleteProduct,
};
