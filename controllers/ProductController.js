const { response } = require("express");
const ProductModel = require("../models/ProductModel");

//CRUD Operations
const getAllProducts = async (req, res) => {
  const products = await ProductModel.find({});
  res.json(products);
};

const getProductBySlug = (req, res) => {
  ProductModel.findOne({ slug: req.params.slug })
    .then((response) => {
      console.log("Get Request for product slug=" + req.params.slug);
      console.log(response);
      res.json(response);
    })
    .catch((err) => console.log(err));
};

const addProduct = (req, res) => {
  let product = new ProductModel(req.body);
  product
    .save()
    .then(() => res.send("Product Added"))
    .catch((err) => console.log("Error in add product controller" + err));
};
const updateProduct = (req, res) => {
  ProductModel.findOneAndUpdate({ slug: req.params.slug }, req.body, {
    new: true,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
};
const deleteProduct = (req, res) => {
  ProductModel.findOneAndDelete({ slug: req.params.slug })
    .then((response) => {
      console.log(response);
      res.json({ message: response });
    })
    .catch((err) => res.json({ message: err }));
};

module.exports = {
  getAllProducts,
  getProductBySlug,
  addProduct,
  updateProduct,
  deleteProduct,
};
