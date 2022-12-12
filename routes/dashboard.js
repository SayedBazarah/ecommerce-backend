const AdminsController = require("../controllers/AdminsController");
const express = require("express");

const router = express.Router();

router.post("/", AdminsController.loginAuth);

module.exports = router;
