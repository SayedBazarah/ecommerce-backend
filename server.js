//Express
const express = require("express");
const app = express();

//Essential Middle Wares & Enviroment
const bodyParser = require("body-parser");
const helmet = require("helmet");
require("dotenv").config();

//Middlewares
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Database Connection Setup
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URL, {
    // Recovery
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => console.log("Error in DB Connectin" + err));

//PORT
const PORT = process.env.PORT || 3000;

//Routes
const ProuctsRoute = require("./routes/Products");
const CategoriesRoute = require("./routes/Categories");
const OrdersRoute = require("./routes/Orders");
const UserssRoute = require("./routes/Users");
const ComplaintsRoute = require("./routes/Complaints");
const AdminRoute = require("./routes/Admins");

app.use("/api/products", ProuctsRoute);
app.use("/api/categories", CategoriesRoute);
app.use("/api/orders", OrdersRoute);
app.use("/api/users", UserssRoute);
app.use("/api/complaints", ComplaintsRoute);
app.use("/api/admin", AdminRoute);

//Server RUNNING
app.listen(PORT, () =>
  console.log(`Server run on PORT http://localhost:${PORT}`)
);
