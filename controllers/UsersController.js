const UsersModel = require("../models/UsersModels");

//Login Auth
const loginAuth = async (req, res) => {
  let user = await UsersModel.findOne({ email: req.body.email }).exec();

  if (!user)
    return res.status(400).send({ message: "enter valid email & password" });

  let valid = await user.validPassword(req.body.password);
  if (!valid)
    return res.status(400).send({ message: "enter valid email & password" });

  let token = await user.generateJWT();
  res.header("x-auth-token", token);
  res.status(200).send("login successfully ");
};

//Add new user
const newUser = async (req, res) => {
  let user = await UsersModel.findOne({ email: req.body.email }).exec();
  if (user) return res.status(400).send("User already registered!!");

  user = new UsersModel({
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
  });
  user.setPassword(req.body.password);

  await user
    .save()
    .then(() => res.json({ message: `${req.body.username} has added!!` }))
    .catch((err) => console.log(err));
};

//Update user data
const updateUser = (req, res) => {
  console.log("ID from controller" + req.userId);
  UsersModel.findOneAndUpdate({ _id: req.userId }, req.body, { new: true })
    .then((response) => res.json({ newUser: response }))
    .catch((err) => res.json(err));
};

//Delete user
const deleteUser = (req, res) => {
  UsersModel.findOneAndDelete({ _id: req.params.id })
    .then((response) => res.json({ message: response }))
    .catch((err) => res.json({ message: err }));
};

//Get all users Data
const getUsers = (req, res) => {
  UsersModel.find({})
    .then((response) => res.json(response))
    .catch((err) => res.json({ message: err }));
};

//Get single user data
const getSingleUser = (req, res) => {
  UsersModel.findOne({ _id: req.params.id })
    .then((response) => res.json(response))
    .catch((err) => res.json({ message: err }));
};

module.exports = {
  loginAuth,
  newUser,
  updateUser,
  deleteUser,
  getUsers,
  getSingleUser,
};
