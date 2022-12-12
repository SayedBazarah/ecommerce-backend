const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  console.log("auth middleware!");
  const token = req.header("x-auth-token");
  if (!token) res.status(401).send({ message: "Access Denied..." });

  try {
    const payload = jwt.verify(token, config.get("jwtsec"));
    console.log(payload);
    req.role = payload.role
    if (!payload.role && payload.role !== "admin") res.status(401).send({ message: "Access Denied..." });
    next();
  } catch (err) {
    console.log(err);
    res.status(400).send("Invalid Token..");
  }
};
