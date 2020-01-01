import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'

import graphqlClient from '#root/api/graphql'

import App from '#root/App'
import 'antd/dist/antd.css'
import '#root/global.scss'

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('serviceWorker.js')
// }

// if (module.hot) {
//   module.hot.accept()
// }

const app = (
  <ApolloProvider client={graphqlClient}>
    <App />
  </ApolloProvider>
)

render(app, document.getElementById('app'))
