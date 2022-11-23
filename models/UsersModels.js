const mongoose = require("mongoose");

//Missing
//Bcrypt.js NPM Package for crypt password

const UsersSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  thumbnail: String,
  orders: [{ orderId: String, orderPrice: Number }],
  "bill-address": String,
  "default-address": String,
  phone: Number,
});

const UsersModel = mongoose.model("Users", UsersSchema);

module.exports = UsersModel;
