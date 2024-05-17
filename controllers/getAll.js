import dbConnection from '../config/database'; 
const itemSchema = require('../schema/itemSchema');
const ItemModel = dbConnection.model('item', itemSchema); 
export default {
  /**
   * Retrieves all items from the database.
   * @param  req
   * @param  res
   */
  getAllItems: (req, res) => {
    ItemModel.find({}).then(results => {
      res.status(200).json({ results });
    }).catch(err => {
      res.status(500).json({ error: err });
    });
  }
};

