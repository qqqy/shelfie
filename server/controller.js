module.exports = {
  get_inventory: function(req, res){
    let db = req.app.get('db')
    db.get_inventory().then(inventoryOb => res.status(200).send(inventoryOb)).catch(err => err.message)
  }
}