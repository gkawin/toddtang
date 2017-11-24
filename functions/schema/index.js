
const { makeExecutableSchema } = require('graphql-tools')

const  resolvers = require('./resolvers')

// Define your types here.
const typeDefs = /* GraphQL */`
  type User {
    id: ID!
    email: String!
    language: String! @defaultValue(value: "th")
    bank_account: [Bank]
  }

  type Bank {
    abbr: String
    code: String
    offical_name: String
    nice_name: String
  }

  type Query {
    getUsers: [User]!
    getBanks: [Bank]
  }
`
module.exports = makeExecutableSchema({ typeDefs, resolvers })
