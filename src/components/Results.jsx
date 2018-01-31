import React, { Component } from 'react'

var Link = require('react-router-dom').Link

export class Results extends Component {

  drawResult(result) {
    const email = "mailto:" + result.email
    return (
      <div key={result.first_name} className="col-md-4 col-sm-6">
        <Link to={`/contractors/${result.slug}`}>
          <div className="card card-profile">
            <div className="card-block">
              <div className="card-avatar">
                <img src={result.profile_img_url} alt="..." />
              </div>
              <h4 className="card-title">{result.first_name} {result.last_name}</h4>
              <h6 className="card-category">{result.professional_title}</h6>
              <p className="card-description">
                {result.about_description.substring(0, Math.min(60, result.about_description.length))}...
              </p>
              <div className="card-footer text-center">
                <a href={`https://tassos.net`} target="_blank" className="btn btn-just-icon btn-outline-default">
                  <i className="fa fa-globe" aria-hidden="true"></i>
                </a>
                <a href={`https://www.linkedin.com/in/${result.linkedin_handle}`} target="_blank" className="btn btn-just-icon btn-outline-default">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href={`https://github.com/${result.github_handle}`} target="_blank" className="btn btn-just-icon btn-outline-default ">
                  <i className="fa fa-github-alt" aria-hidden="true"></i>
                </a>
                <a href={email} target="_blank" className="btn btn-just-icon btn-outline-default">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </Link>
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
