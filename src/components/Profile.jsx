import React, { Component } from 'react'
// import Data from '../Data'
import '../pk2-pro-html-v2/assets/css/bootstrap.min.css'
import '../pk2-pro-html-v2/assets/css/nucleo-icons.css'
import '../pk2-pro-html-v2/assets/css/paper-kit.css'
import '../App.css'
import Navbar from './Navbar'
import ProfileTechCard from './ProfileTechCard'
import axios from 'axios'

export class Profile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      contractor: {},
      updatedContractor: false
    }
  }

  componentWillMount() {
    this.getContractor()
  }

  getContractor(){
    axios.get(`http://localhost:8000/mslink/${this.props.match.params.slug}`)
    .then(response => {
      console.log(response)
      if (response.status === 200) {
        console.log("Yay it worked! In theory")
        return this.setState({contractor: response.data, updatedContractor: true})
      }
    })
    .catch(error => {
      console.log('error!')
      console.log(error);
    })
  }

  componentDidMount(prevProps) {
    window.scrollTo(0, 0)
  }

  render() {

    const email = "mailto:" + this.state.contractor.email
    return (
      <div className="section">
        <div className="row">
          <div className="col-md-8 offset-md-2">
          <a href="javascript:history.back()" className="btn btn-sm btn-link btn-move-left"><i className="nc-icon nc-minimal-left"></i> Back</a>
          <div className="profile-content section">
            <div className="container">
              <div className="row">
                <div className="profile-picture">
                  <div className="fileinput fileinput-new" data-provides="fileinput">
                    <div className="fileinput-new img-no-padding" >
                      <img src={this.state.contractor.profile_img_url} alt="..." />
                    </div>
                    <div className="text-center">
                      <a href={this.state.contractor.website} target="_blank" className="btn btn-just-icon btn-outline-default">
                        <i className="fa fa-globe" aria-hidden="true"></i>
                      </a>
                      <a href={`https://www.linkedin.com/in/${this.state.contractor.linkedin_handle}`} target="_blank" className="btn btn-just-icon btn-outline-default">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                      <a href={`https://github.com/${this.state.contractor.github_handle}`} target="_blank" className="btn btn-just-icon btn-outline-default ">
                        <i className="fa fa-github-alt" aria-hidden="true"></i>
                      </a>
                      <a href={email} target="_blank" className="btn btn-just-icon btn-outline-default">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                      </a>
                    </div>
                    <div className="name">
                      <h4 className="title text-center">{this.state.contractor.first_name} {this.state.contractor.last_name}<br/><small>{this.state.contractor.professional_title}</small></h4>
                    </div>

                    <blockquote className="blockquote">
                      <p className="mb-0">{this.state.contractor.about_description}</p>
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="row">
                  {/*<ProfileTechCard category="Languages" items={this.state.contractor.tech.languages} />
                <ProfileTechCard category="Frameworks" items={this.state.contractor.tech.frameworks} />
                <ProfileTechCard category="Tools & Libraries" items={this.state.contractor.tech.toolsAndLibraries} />
                <ProfileTechCard category="Databases & ORMs" items={this.state.contractor.tech.databasesAndORMs} />
                <ProfileTechCard category="Other" items={this.state.contractor.tech.other} />*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
}

export default Profile
