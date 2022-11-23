const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  "customer-id": "String",
  amount: Number,
  "shipping-address": {
    city: String,
    street: String,
    description: String,
  },
  date: String,
  Status: {
    type: String,
    enum: ["Processing", "Packing", "Shipping", "Delivered"],
    default: "Processing",
  },
  notes: String,
  "payment-method": {
    type: String,
    enum: ["Paypal", "Credit Card", "Cash on Delivery"],
  },
  products: [
    {
      id: String,
      name: String,
      thumbnail: String,
      quantity: Number,
      slug: String,
    },
  ],
});

const OrdersModule = mongoose.model("Orders", OrdersSchema);

module.exports = OrdersModule;
