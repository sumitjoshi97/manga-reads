import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'

import graphqlClient from './api/graphql'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('serviceWorker.js')
}

const app = (
  <ApolloProvider client={graphqlClient}>
    <h1>Working</h1>
  </ApolloProvider>
)
render(app, document.getElementById('app'))
