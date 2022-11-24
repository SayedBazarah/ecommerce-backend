const express = require("express");
const OrderController = require("../controllers/OrdersController");
const router = express.Router();

router.post("/", OrderController.addOrder);
router.get("/", OrderController.getAllOrders);
router.get("/:id", OrderController.getOrderById);
router.put("/:id", OrderController.updateOrder);
router.delete("/:id", OrderController.deleteOrder);

module.exports = router;
