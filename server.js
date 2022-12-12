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
const PORT = process.env.PORT || 3009;

//Routes
const ProuctsRoute = require("./routes/Products");
const CategoriesRoute = require("./routes/Categories");
const OrdersRoute = require("./routes/Orders");
const UsersRoute = require("./routes/Users");
const ComplaintsRoute = require("./routes/Complaints");
const AdminRoute = require("./routes/Admins");
const LodinRoute = require("./routes/login");
const DashboardRoute = require("./routes/dashboard");

app.use("/api/product", ProuctsRoute);
app.use("/api/category", CategoriesRoute);
app.use("/api/order", OrdersRoute);
app.use("/api/user", UsersRoute);
app.use("/api/complain", ComplaintsRoute);
app.use("/api/admin", AdminRoute);
app.use("/api/login", LodinRoute);
app.use("/api/dashboard", DashboardRoute);


//Server RUNNING
app.listen(PORT, () =>
  console.log(`Server run on PORT http://localhost:${PORT}`)
);
