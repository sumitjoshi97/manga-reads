const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
  logger: { log: e => console.log(e) },
})
