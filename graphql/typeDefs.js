const typeDefs = `
  type Manga {
    id: ID!,
    image: String!,
    title: String!
  }

  type Query {
    mangas: [Manga!]!
  }
`

module.exports = typeDefs
