import dbConnection from '../config/database'
const itemSchema = require('../schema/itemSchema')
const ItemModel = dbConnection.model('item', itemSchema)

export default {
  /**
   * Removes an item with its Id or tells user that the item is not found
   * @param  req
   * @param  res
   */
  deleteById: (req, res) => {
    ItemModel.findByIdAndDelete(req.params.id).then(result => {
      if (!result) {
        res.status(404).json({ message: 'Item not found' })
      } else {
        res.status(200).json({ message: 'Item removed' })
      }
    }).catch(err => {
      res.status(500).json({ error: err })
    })
  }
}
