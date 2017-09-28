import React, { Component } from 'react'
import Navbar from './Navbar'
import Background from '../pk2-pro-html-v2/assets/img/sections/rodrigo-ardilha.jpg'

const divStyle = {
  backgroundImage: `url( ${ Background } )`
}

export class Header extends React.Component {
  render() {
    return (
      <div className = "page-header page-header-small" style= { divStyle }>
        <Navbar />
      </div>
    )
  }
}

export default Header
