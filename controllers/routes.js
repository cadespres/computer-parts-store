const express = require("express");
const ItemController = require("./item.controller")
const OrderController = require('./order.controller')
const router = express.Router();

router.get("/items", ItemController.apiGetItems)
router.post("/items", ItemController.apiPostItem)
router.patch('/items/:id', ItemController.apiPatchItem)
router.delete('/items/:id', ItemController.apiDeleteItem)

router.post("/orders", OrderController.apiPostItem)

module.exports = router;