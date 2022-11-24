const express = require("express");
const UsersController = require("../controllers/UsersController");
const router = express.Router();

router.post("/ ", UsersController.addUser);
router.get("/", UsersController.getUsers);
router.get("/:id", UsersController.getSingleUser);
router.put("/:id", UsersController.updateUser);
router.delete("/:id", UsersController.deleteUser);

module.exports = router;
