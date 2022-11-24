const ComplaintsModel = require("../models/ComplaintsModel");

//CRUD Operations
const getAllComplaints = async (req, res) => {
  const Complaints = await ComplaintsModel.find({});
  res.json(Complaints);
};

const getComplaintById = (req, res) => {
  ComplaintsModel.findOne({ _id: req.params.id })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => console.log(err));
};

const addComplaint = (req, res) => {
  let Order = new ComplaintsModel(req.body);
  Order.save()
    .then(() => res.send("Order Added"))
    .catch((err) => console.log("Error in add Order controller" + err));
};
const updateComplaint = (req, res) => {
  ComplaintsModel.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
};
const deleteComplaint = (req, res) => {
  console.log("delete Complaint");
  ComplaintsModel.findOneAndDelete({ _id: req.params.id })
    .then((response) => {
      console.log(response);
      res.json({ message: response });
    })
    .catch((err) => res.json({ message: err }));
};

module.exports = {
  getAllComplaints,
  getComplaintById,
  addComplaint,
  updateComplaint,
  deleteComplaint,
};
