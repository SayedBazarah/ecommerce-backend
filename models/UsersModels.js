const mongoose = require("mongoose");

//Missing
//Bcrypt.js NPM Package for crypt password

const UsersSchema = new mongoose.Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  thumbnail: String,
  orders: [{ orderId: String, orderPrice: Number }],
  "bill-address": String,
  "default-address": String,
  phone: { type: Number, required: true },
});

const UsersModel = mongoose.model("Users", UsersSchema);

module.exports = UsersModel;
