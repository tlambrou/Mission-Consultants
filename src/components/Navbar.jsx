import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <nav className={(this.props.dark === true) ? `navbar navbar-toggleable-md navbar-default` : `navbar navbar-toggleable-md navbar-transparent navbar-absolute`}>
      <div className="container">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-bar"></span>
          <span className="navbar-toggler-bar"></span>
          <span className="navbar-toggler-bar"></span>
        </button>
        <a className="navbar-brand mb-0" href="/">Mission Consultants</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <a href="#services" className="btn btn-link btn-neutral">Services</a>
            <a href="#search" className="btn btn-link btn-neutral">Contractors</a>
            <a href="#contact-us" className="btn btn-link btn-neutral">Contact Us</a>
            {/*<a href="#missionconsultants" target="_blank" className="btn btn-link btn-neutral"><i className="fa fa-twitter"></i></a>
            <a href="#missionconsultants" target="_blank" className="btn btn-link btn-neutral"><i className="fa fa-facebook"></i></a>*/}
          </ul>
        </div>
      </div>
    </nav>
    )
  }
}

export default Navbar
