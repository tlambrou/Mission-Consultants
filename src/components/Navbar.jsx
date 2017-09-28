import React, { Component } from 'react'
import '../pk2-pro-html-v2/assets/css/paper-kit.css'


export class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-default">
        <button className="navbar-toggler navbar-toggler-right" type="button" dataToggle="collapse" dataTarget="#navbarNavDropdown" ariaControls="navbarNavDropdown" ariaExpanded="false" ariaLabel="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">Navbar</a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Work in progress... <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" dataToggle="dropdown" ariaHaspopup="true" ariaExpanded="false">
                Dropdown link
              </a>
              <div className="dropdown-menu" ariaLabelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
