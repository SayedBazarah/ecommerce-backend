const AdminsController = require("../controllers/AdminsController");
const express = require("express");

//Auth
const auth = require('../middlewares/AdminMWValidator')
const router = express.Router();

//End-Points for Admins -> /api/admins
//Login as admin
router.post("/",auth, AdminsController.addAdmin);

router.get("/",auth, AdminsController.getAllAdmins);
router.get("/:id",auth, AdminsController.getAdminById);
router.put("/:id",auth, AdminsController.updateAdmin);
router.delete("/:id",auth, AdminsController.deleteAdmin);

module.exports = router;
