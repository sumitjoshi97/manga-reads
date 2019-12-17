import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'

const Date = new GraphQLScalarType({
  name: 'Date',
  description: 'Date',
  serialize(timestamp) {
    return new Date(timestamp * 1000).toISOString()
  },
})
