const CategoriesModel = require("../models/CategoriesModel");

//CURD operations -> Categories
const getAllCategories = async (req, res) => {
  const Categories = await CategoriesModel.find({});
  res.json(Categories);
};

const getCategoryById = (req, res) => {
  CategoriesModel.findOne({ _id: req.params.id })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => res.json({ message: err }));
};

const addCategory = (req, res) => {
  let Categorie = new CategoriesModel(req.body);
  Categorie.save()
    .then((response) => res.json(response))
    .catch((err) => res.json({ message: err }));
};
const updateCategory = (req, res) => {
  CategoriesModel.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
};
const deleteCategory = (req, res) => {
  CategoriesModel.findOneAndDelete({ _id: req.params.id })
    .then((response) => {
      res.json({ message: response });
    })
    .catch((err) => res.json({ message: err }));
};

module.exports = {
  getAllCategories,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
};
