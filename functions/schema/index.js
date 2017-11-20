
const { makeExecutableSchema } = require('graphql-tools')

const  resolvers = require('./resolvers')

// Define your types here.
const typeDefs = /* GraphQL */`
  type User {
    id: ID!
    email: String
  }

  type Query {
    getUsers: [User]!
  }
`

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({ typeDefs, resolvers })
