import React, { Component } from 'react'
import '../App.css'
import '../pk2-pro-html-v2/assets/css/bootstrap.min.css'
import '../pk2-pro-html-v2/assets/css/nucleo-icons.css'
import '../pk2-pro-html-v2/assets/css/paper-kit.css'
import Header from './Header'
import Services from './Services'
import Search from './Search'
import Footer from './Footer'

export class Home extends Component {

  render() {
    return (
      <div>
        <Header />
        <Services />
        <Search />
        <Footer />
      </div>
    )
  }
}

export default Home
