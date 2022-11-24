const { response } = require("express");
const UsersModel = require("../models/UsersModels");

const addUser = (req, res) => {
  let user = new UsersModel(req.body);
  user
    .save()
    .then((response) => res.json({ message: `User has added  ${response}` }))
    .catch((err) => console.log(err));
};
const updateUser = (req, res) => {
  UsersModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((response) => res.json({ newUser: response }))
    .catch((err) => res.json(err));
};
const deleteUser = (req, res) => {
  UsersModel.findOneAndDelete({ _id: req.params.id })
    .then((response) => res.json({ message: response }))
    .catch((err) => res.json({ message: err }));
};
const getUsers = (req, res) => {
  UsersModel.find({})
    .then((response) => res.json(response))
    .catch((err) => res.json({ message: err }));
};
const getSingleUser = (req, res) => {
  UsersModel.findOne({ _id: req.params.id })
    .then((response) => res.json(response))
    .catch((err) => res.json({ message: err }));
};

module.exports = { addUser, updateUser, deleteUser, getUsers, getSingleUser };
