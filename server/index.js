const express = require('express')
const axios = require('axios')
const ctrl = require('./controller')
const massive = require('massive')
require('dotenv').config()
const { CONNECTION_STRING , SERVER_PORT} = process.env

const app = express()


massive(CONNECTION_STRING).then((connection) => {

  app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))
})