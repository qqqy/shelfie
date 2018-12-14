module.exports = {
  get_inventory: function(req, res){
    const db = req.app.get('db')
    db.get_inventory().then(inventoryOb => res.status(200).send(inventoryOb)).catch(err => err.message)
  } ,

  post_product: function(req,res){
    console.log(req.body)
    const db = req.app.get('db')
    db.create_product(req.body).then((fromDB) => 
    res.status(200).send(fromDB)
    )
    .catch(err => res.send(err.message))
  } ,

  delete_product: function(req, res){
    const db = req.app.get('db')
    res.send("delete_product invoked on "+req.params.id)
    db.delete_product({id: req.params.id})
      .then(() => res.sendStatus(200))
      .catch(err => res.send(err.message))
  }
  
}