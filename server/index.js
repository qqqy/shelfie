const express = require('express')
const axios = require('axios')
const ctrl = require('./controller')
const massive = require('massive')
require('dotenv').config()
const { CONNECTION_STRING , SERVER_PORT} = process.env
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(cors())



app.get('/api/inventory' , ctrl.get_inventory)
app.post('/api/product' , ctrl.post_product)
app.delete('/api/delete/:id' , ctrl.delete_product)



massive(CONNECTION_STRING).then((connection) => {
  app.set('db' , connection)
  app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))
})