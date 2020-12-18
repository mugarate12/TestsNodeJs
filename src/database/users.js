let users = []

module.exports = {
  create: (username, password) => {
    for (let index = 0; index < users.length; index++) {
      if (users[index].username === username) {
        throw new Error('User already exists in database')
      }
    }

    users.push({
      username,
      password
    })

    return 1
  },
  get: (username) => {
    for (let index = 0; index < users.length; index++) {
      if (users[index].username === username) {
        return {
          id: index,
          username: users[index].username,
          password: users[index].password
        }
      }
    }

    return {}
  }
}