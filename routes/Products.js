const productController = require("../controllers/ProductController");

const express = require("express");
const router = express.Router();

//End-Points for Products -> /api/products
router.post("/", productController.addProduct);
router.get("/", productController.getAllProducts);
router.get("/:slug", productController.getProductBySlug);
router.put("/:slug", productController.updateProduct);
router.delete("/:slug", productController.deleteProduct);

module.exports = router;
