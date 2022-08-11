const Order = require('../models/Order')
const Item = require('../models/Item')

exports.createOrder = async function(req, res) {

  let order

  try {
    let itemsIds = []
    let subTotal = 0

    console.log(`items look like ${req.body.items}`)
    console.log(`there is ${req.body.items.length} item(s)`)

    for (let i = 0; i < req.body.items.length; i++ ) {
      let id = req.body.items[i]
      console.log(`here's the ${i} id ${id}`)
      let item = await retrieveItem(id)
      if (item) {
        itemsIds.push(id)
        subTotal += item.price

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
      totalPrice: subTotal + taxes,
    });

    await order.save();
  } catch (e) {
    console.log(`Something bad happened ${e}`)
  }

  return order;
}

async function retrieveItem(id) {
  console.log(`Trying to load item with id ${id}`)
  return Item.findById(id)
}

