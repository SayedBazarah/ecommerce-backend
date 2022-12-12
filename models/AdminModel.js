const mongoose = require("mongoose");
const valid = require("validator");
const uniqueValidator = require("mongoose-unique-validator");
const bcript = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");

const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    pattern: "^[A-Z][a-z]*$",
    match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    required: [true, "can't be blank"],
    lowercase: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    validate: {
      validator: (val) => valid.isEmail(val),
      message: "{VALUE} is not a valid email",
    },
    required: [true, "can't be blank"],
    lowercase: true,
    unique: true,
  },
  hash: String,
  thumbnail: String,
  role: {
    type: String,
    enum: ["admin", "moderator"],
    required: [true, "can't be blank"],
  },
}, { timestamps: true });

AdminSchema.methods.setPassword = async function (password) {
  let salt = await bcript.genSalt(10);
  this.hash = await bcript.hash(password, salt);
};

AdminSchema.methods.validPassword = async function (password) {
 
  let valid = await bcript.compare(password, this.hash);
  return valid
};
AdminSchema.methods.generateJWT = async function () {
  let today = new Date();
  let exp = new Date(today);
  exp.setDate(today.getDate() + 7);

  return jwt.sign(
    {
      id: this._id,
      username: this.username,
      role: this.role,
    },
    config.get("jwtsec")
  );
};
AdminSchema.methods.toAuthJSON = function () {
  return {
    username: this.username,
    email: this.email,
    token: this.geneateJWT(),
    role: this.role,
  };
};

AdminSchema.plugin(uniqueValidator);

const AdminModel = mongoose.model("Admin", AdminSchema);

module.exports = AdminModel;
