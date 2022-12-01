//Database Connection Setup
const mongoose = require("mongoose");

//URL in schema to identify pages that complaints & suggestions come from
const ComplaintsSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
    date: String,
    url: String,
  },
  { required: ["name", "email", "mesage"] }
);

const ComplaintsModel = mongoose.model("Complaints", ComplaintsSchema);

module.exports = ComplaintsModel;
