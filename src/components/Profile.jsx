import React, { Component } from 'react'

var Link = require('react-router-dom').Link
var NavLink = require('react-router-dom').NavLink

export class Profile extends Component {

  render() {
    const result = this.props.result

    return (
      <div key={result.firstName} className="col-md-4 col-sm-6">
        <div className="card card-profile">
          <div className="card-avatar border-white">
            <a href="#avatar">
              <img src={result.photoURL} alt="..." />
            </a>
          </div>
          <div className="card-block">
            <h4 className="card-title">{result.firstName} {result.lastName}</h4>
            <h6 className="card-category">{result.title}</h6>
            <p className="card-description">
              {result.bio.substring(0, Math.min(60, result.bio.length))}...
            </p>
            <div className="card-footer text-center">
              <a href="#paper-kit" className="btn btn-just-icon btn-outline-default">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#paper-kit" className="btn btn-just-icon btn-outline-default ">
                <i className="fa fa-github-alt" aria-hidden="true"></i>
              </a>
              <a href="#paper-kit" className="btn btn-just-icon btn-outline-default">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
