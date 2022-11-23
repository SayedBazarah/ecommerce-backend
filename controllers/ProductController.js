const ProductModel = require("../models/ProductModel");

//CRUD Operations
const getAllProducts = async (req, res) => {
  const products = await ProductModel.find({});
  res.json(products);
};

const getProductBySlug = async (req, res) => {
  console.log(req.params.slug);
  const product = await ProductModel.find({ "seo.slug": "long-tshirt-5" });
  console.log(product);
  res.json({ message: "Products End Point Work" });
};
const addProduct = (req, res) => {
  console.log(req.body);
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
  getProductBySlug,
  addProduct,
  updateProduct,
  deleteProduct,
};
