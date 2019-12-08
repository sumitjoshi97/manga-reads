const express = require('express')
const graphqlHTTP = require('express-graphql')

const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true,
  })
)

app.get('/', (req, res) => res.send('server running'))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server running on port ${PORT}`))
