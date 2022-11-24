const AdminsController = require("../controllers/AdminsController");
const express = require("express");

const router = express.Router();

//End-Points for Admins -> /api/admins
router.post("/", AdminsController.addAdmin);
router.get("/", AdminsController.getAllAdmins);
router.get("/:id", AdminsController.getAdminById);
router.put("/:id", AdminsController.updateAdmin);
router.delete("/:id", AdminsController.deleteAdmin);

module.exports = router;
