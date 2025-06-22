//imports
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const dbConnection = require("./utils/database.js");

//app
const app = express();

//middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

//routes
const routes = require("./routes/testRoutes.js");
app.use("/", routes);

//port
const port = process.env.PORT || 3001;

//listeners
const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
