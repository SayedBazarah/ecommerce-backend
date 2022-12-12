const mongoose = require("mongoose");
const valid = require("validator");
const uniqueValidator = require("mongoose-unique-validator");
const bcript = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");
const UserSchema = new mongoose.Schema(
  {
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
    phone: { type: Number, required: true },
    orders: [{ orderId: String, orderPrice: Number }],
    thumbnail: String,
    address: String,
  },
  { timestamps: true }
);
UserSchema.methods.setPassword = async function (password) {
  let salt = await bcript.genSalt(10);
  this.hash = await bcript.hash(password, salt);
};

UserSchema.methods.validPassword = async function (password) {
  return await bcript.compare(password, this.hash);
};
UserSchema.methods.generateJWT = async function () {
  let today = new Date();
  let exp = new Date(today);
  exp.setDate(today.getDate() + 7);

  return jwt.sign(
    {
      id: this._id,
      username: this.username,
    },
    config.get("jwtsec")
  );
};
UserSchema.methods.toAuthJSON = function () {
  return {
    username: this.username,
    email: this.email,
    token: this.geneateJWT(),
    phone: this.phoe,
    orders: this.orders,
    thumbnail: this.thumbnail,
    address: this.address,
  };
};

UserSchema.plugin(uniqueValidator);

const UsersModel = mongoose.model("User", UserSchema);

module.exports = UsersModel;