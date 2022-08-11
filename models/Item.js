const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  name: String,
  description: String,
  type: String,
  price: Number
});

module.exports = mongoose.model("Item", schema);
