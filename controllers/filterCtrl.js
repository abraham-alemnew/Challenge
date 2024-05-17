import dbConnection from '../config/database'; 
const itemSchema = require('../schema/itemSchema');
const ItemModel = dbConnection.model('item', itemSchema); 

export default {
  /**
   * Filters all items in a database by given category
   * @param  req
   * @param  res
   */
  filterCategory: (req, res) => {
    const category = req.params.category; 
    ItemModel.find({ category: category }).then(results => {
      res.status(200).json({ results });
    }).catch(err => {
      res.status(500).json({ error: err });
    });
  }
};
