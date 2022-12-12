const express = require("express");

const router = express.Router();
const UserController = require("../controllers/UsersController");

router.post("/", UserController.loginAuth);

module.exports = router;
