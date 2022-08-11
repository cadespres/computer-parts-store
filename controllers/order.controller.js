const OrderService = require('../services/order.service')

class OrderController {

  static async apiPostItem(req, res, next) {
    console.log(`body looks like this ${req.body.inspect}`)
    let order = await OrderService.createOrder(req, res)

    res.send(order);
  }

}

module.exports = OrderController