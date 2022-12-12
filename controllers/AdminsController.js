const AdminModel = require("../models/AdminModel");

//Login 
const loginAuth = async (req, res) => {
  let admin = await AdminModel.findOne({ email: req.body.email }).exec();

  if (!admin)
    return res.status(400).send({ message: "enter valid email & password" });

  let valid = await admin.validPassword(req.body.password);
  if (!valid)
    return res.status(400).send({ message: "enter valid email & password" });

  let token = await admin.generateJWT();
  res.header("x-auth-token", token);
  res.status(200).send("login successfully ");
};

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

const addAdmin = async (req, res) => {
  let admin = await AdminModel.findOne({ email: req.body.email }).exec();
  if (admin) return res.status(400).send("User already registered!!");

   admin = new AdminModel({
    username: req.body.username,
    email: req.body.email,
    role:  req.body.role,
  });

  admin.setPassword(req.body.password);

  await admin
    .save()
    .then(() => res.json({message: `${req.body.username} has added..`}))
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
  loginAuth,
  getAllAdmins,
  getAdminById,
  addAdmin,
  updateAdmin,
  deleteAdmin,
};
