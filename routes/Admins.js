const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Admin End Point Work" });
});

module.exports = router;
