const request = require('supertest')
const app = require('./../../src/app')

describe('Users routes cases', () => {
  describe('create users cases', () => {
    test('sucessful create user request', async () => {
      const username = 'MyUsernameIsThis'
      const password = 'AndMyPasswordIsThis'

      const createUserRequest = await request(app)
        .post('/users')
        .send({
          username,
          password
        })
      
      expect(createUserRequest.status).toBe(201)
      expect(createUserRequest.body.sucess).toBe('Usuario criado com sucesso!')
    })

    test('failure to create user request  ', async () => {
      const username = 'MyUsernameIsThis'
      const password = 'AndMyPasswordIsThis'

      const failureToCreateUserRequest = await request(app)
        .post('/users')
        .send({
          username,
          password
        })

      expect(failureToCreateUserRequest.status).toBe(406)
      expect(failureToCreateUserRequest.body.error.name).toBeDefined()
      expect(failureToCreateUserRequest.body.error.message).toBeDefined()
    })
  })

  describe('get user cases', () => {
    test('get user by username request', async () => {
      const username = 'MyUsernameIsThis'

      const getUserRequest = await request(app)
        .get(`/users/${username}`)

      expect(getUserRequest.status).toBe(200)
      expect(getUserRequest.body.user.username).toBeDefined()
      expect(getUserRequest.body.user.password).toBeDefined()
    })
  })
  
})