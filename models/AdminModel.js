const mongoose = require("mongoose");

//Missing
//Bcrypt.js NPM Package for crypt password

const AdminsSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  thumbnail: String,
  major: {
    type: String,
    enum: ["admin", "moderator", "analyst"],
  },
});

const AdminsModel = mongoose.model("Admins", AdminsSchema);

module.exports = AdminsModel;
