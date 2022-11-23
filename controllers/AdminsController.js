const AdminModel = require("../models/AdminModel");

//CURD operations -> Admins
const getAllAdmins = async (req, res, next) => {
  const admins = await AdminModel.find({});
  res.json(admins);
};

module.exports = { getAllAdmins };
