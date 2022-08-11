const Order = require("../models/Order");
const { ObjectId } = require('mongodb');
const ExpectedError = require('../errors/ExpectedError')
const OrderService = require('../services/order.service')

class OrderController {

  static async apiPostItem(req, res, next) {
    console.log(`body looks like this ${req.body.inspect}`)
    let order = await OrderService.createOrder(req, res)

    console.log(`order looks like this ${order}`)
    res.send(order)
  }

}

module.exports = OrderController