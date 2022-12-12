const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UsersController");

//Authorization
const auth = require("../middlewares/AuthMWPermission");
//public
router.post("/", UserController.newUser);

//auth needed
router.put("/", auth, UserController.updateUser);

module.exports = router;
