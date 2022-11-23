const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Customers End Point Work" });
});

module.exports = router;
