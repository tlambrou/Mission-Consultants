import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import './pk2-pro-html-v2/assets/css/paper-kit.css'
import data from './Data'
import Navbar from './components/Navbar'
import Background from '../src/pk2-pro-html-v2/assets/img/sections/rodrigo-ardilha.jpg'

const tassos = data['contractors']
const divStyle = {
  backgroundImage: `url(${Background})`
}
class App extends Component {
  render() {

    return (
        <div className = "page-header page-header-small" style= {divStyle}>
            
        </div>
    )
  }
}

console.log(data)

export default App
