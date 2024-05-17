import dbConnection from '../config/database'
const itemSchema = require('../schema/itemSchema')
const ItemModel = dbConnection.model('item', itemSchema)

export default {
  /**
   * Searches for an item with its Id.
   * @param  req
   * @param  res
   */
  searchById: (req, res) => {
    ItemModel.findById(req.params.id).then(result => {
      if (!result) {
        res.status(404).json({ message: 'No results found!' })
      } else {
        res.status(200).json({ result })
      }
    }).catch(err => {
      res.status(500).json({ error: err })
    })
  }
}
