const Order = require('../models/Order')
const Item = require('../models/Item')
const { ObjectId } = require("mongodb");
const ExpectedError = require('../errors/ExpectedError')

exports.createOrder = async function(req, res) {

  let order

  try {

    // customer: {
    //   firstName: String,
    //     lastName: String,
    //     address1: String,
    // },
  //  items: [{ type:ObjectId, ref: "Item" }],
    //   status: String,
    //   subTotal: Number,
    //   totalPrice: Number

    let itemsIds = []
    let subTotal = 0

    let item = await retreiveItem(req.body.itemId)

    subTotal = item.price

    for (let i = 0; i < req.body.items.length; i++ ) {
      let id = req.body.items[i].id
      let item = await retreiveItem(id)
      if (item) {
        itemsIds.push(id)
        subTotal = subTotal + item.price

      } else {

      }
    }

    let customer = {
      firstName: req.body.customer.firstName,
      lastName: req.body.customer.lastName,
      address: req.body.customer.address
    }

    let taxes = subTotal * 0.15

    order = new Order({
      customer: customer,
      items: itemsIds,
      subTotal: subTotal,
      taxes: taxes,
      totalPrice: subTotal + taxes
    });
  } catch (e) {
    console.log(`Something bad happened ${e}`)
  }

  return order;

}

async function retreiveItem(id) {
  console.log(`Trying to load item with id ${id}`)
  return Item.findById(id)
}

