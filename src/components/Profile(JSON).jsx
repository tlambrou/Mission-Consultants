import React, { Component } from 'react'
import Data from '../Data'
import '../App.css'
import Navbar from './Navbar'
import ProfileTechCard from './ProfileTechCard'

export class Profile extends Component {

  componentDidMount(prevProps) {
    window.scrollTo(0, 0)
  }

  fetchMSProfile(slug) {

  }

  render() {
    const thing = Data.contractors.filter((contractor) => {
      return contractor.firstName.toLowerCase() === this.props.match.params.name
    })
    const result = thing[0]
    const email = "mailto:" + result.email
    return (
      <div className="wrapper">
        <Navbar />
        <div className="profile-content section">
          <div className="container">
            <div className="row">
              <div className="profile-picture">
                <div className="fileinput fileinput-new" data-provides="fileinput">
                  <div className="fileinput-new img-no-padding" >
                    <img src={result.photoURL} alt="..." />
                  </div>
                  <div className="text-center">
                    <a href={result.website} target="_blank" className="btn btn-just-icon btn-outline-default">
                      <i className="fa fa-globe" aria-hidden="true"></i>
                    </a>
                    <a href={result.linkedIn} target="_blank" className="btn btn-just-icon btn-outline-default">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href={result.github} target="_blank" className="btn btn-just-icon btn-outline-default ">
                      <i className="fa fa-github-alt" aria-hidden="true"></i>
                    </a>
                    <a href={email} target="_blank" className="btn btn-just-icon btn-outline-default">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div className="name">
                    <h4 className="title text-center">{result.firstName} {result.lastName}<br/><small>{result.title}</small></h4>
                  </div>

                  <blockquote className="blockquote">
                    <p className="mb-0">{result.bio}</p>
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="row">
                  <ProfileTechCard category="Languages" items={result.tech.languages} />
                  <ProfileTechCard category="Frameworks" items={result.tech.frameworks} />
                  <ProfileTechCard category="Tools & Libraries" items={result.tech.toolsAndLibraries} />
                  <ProfileTechCard category="Databases & ORMs" items={result.tech.databasesAndORMs} />
                  <ProfileTechCard category="Other" items={result.tech.other} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  export default Profile
