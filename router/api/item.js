const express = require("express");
const router = express.Router();

const Item = require("../../models/item");

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
    .catch(err => console.log(err));
});

router.post("/", (req, res) => {
  const item = new Item({
    name: req.body.name
  });

  item
    .save(item)
    .then(item => res.json(item))
    .catch(err => console.log(err));
});

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove())
    .then(() => res.send({ success: true }))
    .catch(() => res.status(400).send({ success: false }));
});

module.exports = router;
