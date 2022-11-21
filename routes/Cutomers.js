const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Cutomers End Point Work" });
});

module.exports = router;
