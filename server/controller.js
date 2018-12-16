module.exports = {
  get_inventory: function(req, res){
    // let optionalClause = '';
    console.log('get_inventory invoked')
    const db = req.app.get('db')
    if(req.query.id){
      console.log('There was a query')
      db.get_product(req.query)
      .then(inventoryOb => res.status(200).send(inventoryOb)).catch(err => err.message)
    } else {
      console.log('No Query, sending all')
      db.get_inventory()
      .then(inventoryOb => res.status(200).send(inventoryOb)).catch(err => err.message)}
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
    // res.send("delete_product invoked on "+req.params.id)
    db.delete_product({id: req.params.id})
      .then(() => res.sendStatus(200))
      .catch(err => res.send(err.message))
  } ,

  edit_product: function(req, res){
    let db = req.app.get('db')
    db.edit_product({
      id: req.params.id,
      name: req.body.name ,
      price: req.body.price ,
      img: req.body.img
    })
      .then(() => res.sendStatus(200)).catch(err => res.send(err))
  }
  
}