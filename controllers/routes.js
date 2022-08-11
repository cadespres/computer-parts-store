const express = require("express");
const ItemController = require("./item.controller")
const router = express.Router();

router.get("/items", ItemController.apiGetItems)
router.post("/items", ItemController.apiPostItem)
router.patch('/items/:id', ItemController.apiPatchItem)
router.delete('/items/:id', ItemController.apiDeleteItem)

module.exports = router;