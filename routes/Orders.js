const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Order End Point Work" });
});

module.exports = router;
