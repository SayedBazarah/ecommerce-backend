const Ajv = require("ajv");
const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    title: { type: "string" },
    price: { type: "number" },
    weight: { type: "number" },
    thumbnail: { type: "string" },
    images: {
      type: "array",
      items: { type: "string" },
    },
    category: { type: "string" },
    "create-date": { type: "string" },
    stock: { type: "integer" },
    description: {
      type: "object",
      properties: {
        short: { type: "string" },
        long: { type: "string" },
      },
    },
    reviews: {
      type: "array",
      items: {
        type: "object",
        properties: {
          rate: { type: "number" },
          review: { type: "string" },
        },
      },
    },
    seo: {
      type: "object",
      properties: {
        "meta-description": { type: "string" },
        slug: { type: "string" },
      },
    },
  },
  additionalProperties: false,
};

module.exports = ajv.compile(schema);
