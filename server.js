//Essential Middle Wares & Enviroment
const bodyParser = require("body-parser");
const helmet = require("helmet");
const auth = require("./middlewares/authorization");
require("dotenv").config();

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

//Express
const express = require("express");
const app = express();

//PORT
const PORT = process.env.PORT || 3009;

//Routes
const ProuctsRoute = require("./routes/Products");
const CategoriesRoute = require("./routes/Categories");
const OrdersRoute = require("./routes/Orders");
const CustomersRoute = require("./routes/Customers");
const ComplaintsRoute = require("./routes/Complaints");
const AdminRoute = require("./routes/Admins");

//Middlewares
app.use(auth);
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.use("/api/products", ProuctsRoute);
app.use("/api/categories", CategoriesRoute);
app.use("/api/orders", OrdersRoute);
app.use("/api/customers", CustomersRoute);
app.use("/api/complaintsRoute", ComplaintsRoute);
app.use("/api/admin", AdminRoute);

//Server RUNNING
app.listen(PORT, () =>
  console.log(`Server run on PORT http://localhost:${PORT}`)
);
