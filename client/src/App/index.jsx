import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '#src/views/Home'

export default function App() {
  return (
    <div className="main-container">
      <Switch>
        <Route component={Home} path="/" />
      </Switch>
    </div>
  )
}
