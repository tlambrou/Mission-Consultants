import React, { Component } from 'react'
import './App.css'
import Reactstrap from 'reactstrap';
import './pk2-pro-html-v2/assets/css/paper-kit.css'
import './pk2-pro-html-v2/assets/css/bootstrap.min.css'
import './pk2-pro-html-v2/assets/css/nucleo-icons.css'
import Home from './components/Home'
import Profile from './components/Profile'
import Data from './Data'
import $ from 'jquery'

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
          {Data.contractors.map((contractor) => {
            var name = contractor.firstName.toLowerCase()
            return <Route key={name} path={`/:name`} component={Profile} />
          })}
          console.dir(Reactstrap)
        </Switch>
      </Router>
    )
  }
}

export default App
