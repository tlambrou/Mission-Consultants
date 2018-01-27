import React, { Component } from 'react'
import './App.css'
import Home from './components/Home'
import Profile from './components/Profile'
import Data from './Data'

var ReactRouter = require('react-router-dom')
var Router = ReactRouter.BrowserRouter
var Route = ReactRouter.Route
var Switch = ReactRouter.Switch

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path={`/contractors/:slug`} component={Profile} />
          {Data.contractors.map((contractor) => {
            var name = contractor.firstName.toLowerCase()
            return <Route key={name} path={`/contractors/:slug`} component={Profile} />
          })}
        </Switch>
      </Router>
    )
  }
}

export default App
