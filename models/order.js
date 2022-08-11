const mongoose = require('mongoose')
const { ObjectId } = require('mongodb');
const { Schema } = mongoose

const schema = new Schema({

  customer: {
    firstName: String,
    lastName: String,
    address1: String,
  },
  items: [{ type:ObjectId, ref: "Item" }],
  status: String,
  subTotal: Number,
  totalPrice: Number
});

module.exports = mongoose.model("Order", schema);
