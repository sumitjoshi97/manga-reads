const express = require('express')
const graphqlHTTP = require('express-graphql')

const mongoose = require('mongoose')

const schema = require('./graphql/schema')
const keys = require('./keys')

mongoose.connect(keys.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

require('./cron')

const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.get('/', (req, res) => res.send('server running'))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server running on port ${port}`))
