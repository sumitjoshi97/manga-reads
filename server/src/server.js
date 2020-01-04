import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'
import { connect } from 'mongoose'

import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'
import { DB_URL } from './keys'

connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const app = express()

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
    preflightContinue: true,
    exposedHeaders: [
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept',
      'X-Password-Expired',
    ],
    optionsSuccessStatus: 200,
  })
)

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
})

apolloServer.applyMiddleware({ app, path: '/graphql' })

app.get('/', (req, res) => res.status(404).send('server running'))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server running on port ${port}`))
