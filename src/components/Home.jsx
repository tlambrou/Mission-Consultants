import React, { Component } from 'react'
import '../App.css'
import '../pk2-pro-html-v2/assets/css/paper-kit.css'
import '../pk2-pro-html-v2/assets/css/bootstrap.min.css'
import '../pk2-pro-html-v2/assets/css/nucleo-icons.css'
import Header from './Header'
import Search from './Search'
var Link = require('react-router-dom').Link
var NavLink = require('react-router-dom').NavLink

export class Profile extends Component {

  render() {
    const result = this.props.result

    return (
      <div>
        <Header />
        <Search />
      </div>
    )
  }
}

export default Profile
