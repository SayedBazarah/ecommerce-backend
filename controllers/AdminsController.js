const AdminModel = require("../models/AdminModel");

//CURD operations -> Admins
const getAllAdmins = async (req, res) => {
  const admins = await AdminModel.find({});
  res.json(admins);
};

const getAdminById = (req, res) => {
  AdminModel.findOne({ _id: req.params.id })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => res.json({ message: err }));
};

const addAdmin = (req, res) => {
  let admin = new AdminModel(req.body);
  admin
    .save()
    .then((response) => res.json(response))
    .catch((err) => res.json({ message: err }));
};
const updateAdmin = (req, res) => {
  AdminModel.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
};
const deleteAdmin = (req, res) => {
  AdminModel.findOneAndDelete({ _id: req.params.id })
    .then((response) => {
      res.json({ message: response });
    })
    .catch((err) => res.json({ message: err }));
};

module.exports = {
  getAllAdmins,
  getAdminById,
  addAdmin,
  updateAdmin,
  deleteAdmin,
};
