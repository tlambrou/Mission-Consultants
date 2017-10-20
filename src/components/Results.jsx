import React, { Component } from 'react'

var Link = require('react-router-dom').Link

export class Results extends Component {

  drawResult(result) {
    return (
      <div key={result.firstName} className="col-md-4 col-sm-6">
        <div className="card card-profile">
          <div className="card-block">
            <div className="card-avatar">
              <Link to={`/${result.firstName.toLowerCase()}`}>
                <img src={result.photoURL} alt="..." />
              </Link>
            </div>
            <h4 className="card-title">{result.firstName} {result.lastName}</h4>
            <h6 className="card-category">{result.title}</h6>
            <p className="card-description">
              {result.bio.substring(0, Math.min(60, result.bio.length))}...
            </p>
            <div className="card-footer text-center">
              <a href="#paper-kit" className="btn btn-just-icon btn-outline-default">
                <i className="fa fa-globe" aria-hidden="true"></i>
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

  renderResults() {
    var results = this.props.results
    var newResults = <li>No new results!</li>
    if (results) {
      newResults = results.map((n) =>{
        return this.drawResult(n)
      })
    }
    return newResults
  }

  render() {
    return (
      <div className="row">

        {this.renderResults()}

      </div>
    )
  }
}

export default Results
