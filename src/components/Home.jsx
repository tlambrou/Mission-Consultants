import React, { Component } from 'react'
import '../App.css'
import Header from './Header'
import Services from './Services'
import Search from './Search'
import Footer from './Footer'
import ContactUs from './ContactUs'

export class Home extends Component {

  render() {
    return (
      <div>
        <Header loggedIn={true} />
        <Services />
        <Search />
        <ContactUs />
        <Footer />
      </div>
      )
    }
  }

  export default Home
