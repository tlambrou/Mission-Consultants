import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import '../src/pk2-pro-html-v2/assets/css/paper-kit.css'
import '../src/pk2-pro-html-v2/assets/css/bootstrap.min.css'
import '../src/pk2-pro-html-v2/assets/css/nucleo-icons.css'
import Header from './components/Header'
import Search from './components/Search'

class App extends Component {
  render() {

    return (
      <div>
        <Header />
        <Search />
      </div>
    )
  }
}

export default App
