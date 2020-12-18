const DatabaseUsers = require('./../../src/database/users')

describe('Database Cases', () => {
  describe('Users Cases', () => {
    test('create user in database by username and password, expected "1" to sucessful request', () => {
      const username = 'MyUsernameIsThis'
      const password = 'AndMyPasswordIsThis'

      const createUser = DatabaseUsers.create(username, password)

      expect(createUser).toBe(1)
    })

    test('failure to create user in database by user already exists and get Error', () => {
      const username = 'MyUsernameIsThis'
      const password = 'AndMyPasswordIsThis'
      let notCreateUser

      try {
        notCreateUser = DatabaseUsers.create(username, password)
      } catch (error) {
        expect(error.name).toBeDefined()
        expect(error.message).toBeDefined()
      }
    })
  })
})
