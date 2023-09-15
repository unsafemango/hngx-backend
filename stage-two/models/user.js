// packages
const mongoose = require("mongoose");

// schema
const user = new mongoose.Schema({
  name: { type: String, minLength: 1 },
});

module.exports = mongoose.model("user", user);
