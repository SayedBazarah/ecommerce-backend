const productController = require("../controllers/ProductController");
const auth = require('../middlewares/ModeratorMWValidator')

const express = require("express");
const router = express.Router();


//End-Points for Products -> /api/products
router.get("/", productController.getAllProducts);
router.get("/:slug", productController.getProductBySlug);
router.post("/",auth, productController.addProduct);
router.put("/:slug",auth, productController.updateProduct);
router.delete("/:slug",auth, productController.deleteProduct);

module.exports = router;
