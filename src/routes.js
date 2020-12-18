const { Router } = require('express')

const routes = Router()

const usersController = require('./controllers/users')

routes.post('/users', usersController.create)
routes.get('/users/:username', usersController.get)

module.exports = routes
