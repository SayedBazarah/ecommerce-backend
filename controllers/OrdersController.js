const OrdersModel = require("../models/OrdersModel");

//CRUD Operations
const getAllOrders = async (req, res) => {
  const Orders = await OrdersModel.find({});
  res.json(Orders);
};

const getOrderById = (req, res) => {
  OrdersModel.findOne({ _id: req.params.id })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => console.log(err));
};

const addOrder = (req, res) => {
  let Order = new OrdersModel(req.body);
  Order.save()
    .then(() => res.send("Order Added"))
    .catch((err) => console.log("Error in add Order controller" + err));
};
const updateOrder = (req, res) => {
  OrdersModel.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
};
const deleteOrder = (req, res) => {
  console.log("delete order");
  OrdersModel.findOneAndDelete({ _id: req.params.id })
    .then((response) => {
      console.log(response);
      res.json({ message: response });
    })
    .catch((err) => res.json({ message: err }));
};

module.exports = {
  getAllOrders,
  getOrderById,
  addOrder,
  updateOrder,
  deleteOrder,
};
