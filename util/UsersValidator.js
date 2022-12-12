const Ajv = require("ajv");
const ajv = new Ajv();

//User Schema
const schema = {
  type: "object",
  properties: {
    email: { type: "string", pattern: ".+@.+..+" },
    hash: { type: "string" },
  },
  required: ["email", "password"],
};

module.exports = ajv.compile(schema);
