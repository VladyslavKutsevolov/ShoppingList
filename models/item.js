const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Item = (module.exports = mongoose.model("Item", itemSchema));
