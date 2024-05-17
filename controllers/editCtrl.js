import dbConnection from '../config/database';
const itemSchema = require('../schema/itemSchema');
const ItemModel = dbConnection.model('item', itemSchema);

export default {
  /**
   * Updates existing data with new JSON given.
   * @param  req
   * @param  res
   */
  editValue: (req, res) => {
    ItemModel.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        category: req.body.category,
        brandname: req.body.brandname,
        images: req.body.images
      },
      { new: true, runValidators: true } 
    )
    .then(result => {
      if (!result) {
        res.status(404).json({ message: 'Item not found' });
      } else {
        res.status(200).json({ message: 'Item edited!', result });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
  }
};
