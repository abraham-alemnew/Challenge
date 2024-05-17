import dbConnection from '../config/database';
const itemSchema = require('../schema/itemSchema');
const ItemModel = dbConnection.model('item', itemSchema);

export default {
  /**
   * Retrieves items from the database that have more than one image.
   * @param  req
   * @param  res
   */
  filterImageSize: (req, res) => {
    ItemModel.find({ 'images.1': { $exists: true } }).then(results => {
      res.status(200).json({ results });
    }).catch(err => {
      res.status(500).json({ error: err });
    });
  }
};
