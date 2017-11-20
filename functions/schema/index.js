
const { makeExecutableSchema } = require('graphql-tools')

const  resolvers = require('./resolvers')

// Define your types here.
const typeDefs = /* GraphQL */`
  type User {
    id: ID!
    email: String
  }

  type Bank {
    key: String!
    text: String
    value: String
  }

  type Query {
    getUsers: [User]!
    getBanks: [Bank]
  }
`

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({ typeDefs, resolvers })
