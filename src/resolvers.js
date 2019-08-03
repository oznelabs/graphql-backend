const users = [
  { id: 1, name: 'Israel', email: 'israelwebti@gmail.com' },
  { id: 2, name: 'Giovana', email: 'giovana@gmail.com' },
]
module.exports = {
  Query: {
    users: () => users,
    user: () => users[0]
  },
  Mutation: {
    createUser: () => users[0],
  },
}