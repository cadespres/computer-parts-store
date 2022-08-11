const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  type: {type: String, required: true},
  price: {type: Number, required: true}
});

module.exports = mongoose.model("Item", schema);
