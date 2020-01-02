import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router } from 'react-router-dom'
import graphqlClient from '#src/api/graphql'

import App from '#src/App'
import '#src/global.scss'
import 'antd/dist/antd.css'

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('serviceWorker.js')
// }

const app = (
  <ApolloProvider client={graphqlClient}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>
)

render(app, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
