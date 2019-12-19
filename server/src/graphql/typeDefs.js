const { gql } = require('apollo-server')

const typeDefs = gql`
  scalar Date

  type Chapter {
    id: ID!
    lastUpdated: Date!
    number: String!
    title: String!
  }

  type Manga {
    id: ID!
    image: String
    lastUpdated: Date!
    title: String!
    info: MangaInfo!
  }

  type MangaInfo {
    id: ID!
    chapters: [Chapter!]!
  }

  type Query {
    mangas: [Manga!]!
    manga(id: ID!): Manga!
  }
`

module.exports = typeDefs
