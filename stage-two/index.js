// packages
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const router = require("./routes/app");

dotenv.config();
mongoose.set("strictQuery", false);
const app = express();
const port = process.env.PORT || 4000;
const { MONGO_CONNECT_STRING } = process.env;

connect();
async function connect() {
  await mongoose.connect(MONGO_CONNECT_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", router);

app.listen(port, () => {
  console.log("====================================");
  console.log("Server has started on port " + port);
  console.log("====================================");
});

module.exports = app;
