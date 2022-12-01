const mongoose = require("mongoose");

//Missing
//Bcrypt.js NPM Package for crypt password

const AdminsSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: { type: String, unique: true },
  thumbnail: String,
  major: {
    type: String,
    enum: ["admin", "moderator", "analyst"],
  },
  required: ["name", "email", "password", "major"],
});

const AdminsModel = mongoose.model("Admins", AdminsSchema);

module.exports = AdminsModel;
