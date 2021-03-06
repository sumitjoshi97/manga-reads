import { gql } from 'apollo-server'

const typeDefs = gql`
  scalar Date

  type Chapter {
    id: ID!
    lastUpdated: Date!
    number: String!
    title: String
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
    mangas(searchTitle: String!): [Manga!]!
    manga(id: ID!): Manga!
  }
`

export default typeDefs
