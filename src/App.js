import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import '../src/pk2-pro-html-v2/assets/css/paper-kit.css'
import 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css'
import '../src/pk2-pro-html-v2/assets/css/nucleo-icons.css'
import data from './Data'
import Header from './components/Header'

const tassos = data['contractors']


class App extends Component {
  render() {

    return (
        <Header />
    )
  }
}

console.log(data)

export default App
