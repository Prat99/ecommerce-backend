const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

const routes = require("./routes/routes");

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected"));

// use routes as middleware all the traffice will direct through it.
app.use("/api/v1", routes);

// assign the server port
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
