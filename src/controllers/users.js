const usersDatabase = require('./../database/users')

module.exports = {
  create: async (req, res) => {
    const { username, password } = req.body

    try {
      usersDatabase.create(username, password)
      return res.status(201).json({ sucess: 'Usuario criado com sucesso!' })
    } catch (error) {
      return res.status(406).json({
        error: {
          name: error.name,
          message: error.message
        }
      })
    }
  },
  get: async (req, res) => {
    const { username } = req.params

    try {
      const user = usersDatabase.get(username)
      return res.status(200).json({ user })
    } catch (error) {
      return res.status(406).json({
        error: {
          name: error.name,
          message: error.message
        }
      })
    }
  }
}