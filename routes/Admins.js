const AdminsController = require("../controllers/AdminsController");
const express = require("express");

const router = express.Router();

//End-Points for Admins -> /api/admins
router.post("/", AdminsController.getAllAdmins);

module.exports = router;
