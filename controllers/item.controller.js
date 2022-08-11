const Item = require("../models/Item");
const { ObjectId } = require('mongodb');
const ExpectedError = require('../errors/ExpectedError')

class ItemController {

  static async apiGetItems(req, res, next) {
    const items = await Item.find()
    res.send(items)
  }

  static async apiPostItem(req, res, next) {
    const item = new Item({
      name: req.body.name,
      description: req.body.description,
      type: req.body.type,
      price: req.body.price
    });
    await item.save();
    res.send(item);
  }

  static async apiPatchItem(req, res, next) {
    try {
      if (!ObjectId.isValid(req.params.id)) {
        throw new ExpectedError("Invalid id")
      }

      await Item.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((item) => {
        if (!item) {
          throw new ExpectedError("Cannot find specified object")
        }
        res.send(item);
      })
    } catch (e) {
      if (e instanceof ExpectedError) {
        res.status(404).json({error: e.message})
        return
      }
      console.log(`Unexpected error ${e}`)
      res.status(500).json({error: "Internal server error, see logs for more details"})
    }
  }

  static async apiDeleteItem(req, res, next) {
    try {
      if (!ObjectId.isValid(req.params.id)) {
        throw new ExpectedError("Invalid id")
      }

    await Item.deleteOne({ _id: req.params.id });
    res.status(204).send();
    } catch (e) {
      if (e instanceof ExpectedError) {
        res.status(404).json({error: e.message})
        return
      }
      console.log(`Unexpected error ${e}`)
      res.status(500).json({error: "Internal server error, see logs for more details"})
    }
  }

}

module.exports = ItemController