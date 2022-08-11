const mongoose = require('mongoose')
const { ObjectId } = require('mongodb');
const { Schema } = mongoose

const schema = new Schema({

  customer: {
    firstName: String,
    lastName: String,
    address: String,
  },
  itemId: { type:ObjectId, ref: "Item" },
  items: [{ type:ObjectId, ref: "Item" }],
  status: String,
  subTotal: Number,
  taxes: Number,
  totalPrice: Number
});

module.exports = mongoose.model("Order", schema);
