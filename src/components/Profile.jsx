import React, { Component } from 'react'
import Data from '../Data'
import '../pk2-pro-html-v2/assets/css/paper-kit.css'
import '../pk2-pro-html-v2/assets/css/bootstrap.min.css'
import '../pk2-pro-html-v2/assets/css/nucleo-icons.css'
import '../App.css'
import Navbar from './Navbar'

export class Profile extends Component {

  componentDidMount(prevProps) {
    window.scrollTo(0, 0)
  }

  render() {
    const thing = Data.contractors.filter((contractor) => {
      return contractor.firstName.toLowerCase() === this.props.match.params.name
    })

    const result = thing[0]

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
                            <div className="name">
                                <h4 className="title text-center">{result.firstName} {result.lastName}<br/><small>{result.title}</small></h4>
                            </div>
	                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                        <p>{result.bio}</p>
                        <br/>
                        <btn className="btn btn-outline-default btn-round"><i className="fa fa-cog"></i> Settings</btn>
                    </div>
                </div>
                <br/>
                <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#follows" role="tab">Follows</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#following" role="tab">Following</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tab-content">
                    <div className="tab-pane active" id="follows" role="tabpanel">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <ul className="list-unstyled follows">
                                    <li>
                                        <div className="row">
                                            <div className="col-md-2 offset-md-0 col-xs-3 offset-xs-2">
                                                <img src="pk2-pro-html-v2/assets/img/faces/clem-onojeghuo-3.jpg" alt="Circle" className="img-circle img-no-padding img-responsive"/>
                                            </div>
                                            <div className="col-md-7 col-xs-4">
                                                <h6>Lincoln<br/><small>Car Producer</small></h6>
                                            </div>
                                            <div className="col-md-3 col-xs-2">
                                                <div className="unfollow">
                                                    <div className="checkbox">
                                                       <input id="checkbox1" type="checkbox" checked=""/>
                                                       <label htmlFor="checkbox1"></label>
                                                     </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <hr/>
                                    <li>
                                        <div className="row">
                                            <div className="col-md-2 offset-md-0 col-xs-3 offset-xs-2">
                                                <img src="pk2-pro-html-v2/assets/img/faces/erik-lucatero-2.jpg" alt="Circle" className="img-circle img-no-padding img-responsive"/>
                                            </div>
                                            <div className="col-md-7 col-xs-4">
                                                <h6>Banks<br/><small>Singer</small></h6>
                                            </div>
                                            <div className="col-md-3 col-xs-2">
                                                <div className="unfollow">
                                                    <div className="checkbox">
                                                       <input id="checkbox2" type="checkbox" checked="" />
                                                       <label htmlFor="checkbox2"></label>
                                                     </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane text-center" id="following" role="tabpanel">
                        <h3 className="text-muted">Not following anyone yet :(</h3>
                        <button className="btn btn-warning btn-round">Find artists</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default Profile
