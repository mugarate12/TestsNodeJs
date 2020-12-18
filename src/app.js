const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('./routes')
const app = express()

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept-Enconding'],
  preflightContinue: false,
  optionsSuccessStatus: 204
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

app.use(routes)

module.exports = app
