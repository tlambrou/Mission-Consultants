import React, { Component } from 'react'
import '../pk2-pro-html-v2/assets/css/bootstrap.min.css'
import '../pk2-pro-html-v2/assets/css/nucleo-icons.css'
import '../pk2-pro-html-v2/assets/css/paper-kit.css'

export class Footer extends Component {

  currentYear() {
    var now = new Date()
    return now.getFullYear()
  }

  render() {
    return (
      <footer className="footer footer-black footer-big">

            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-4">
                        <div className="logo text-center">
                            <h3>Mission Consultants</h3>
                            <a href="https://www.missionconsultants.io">MissionConsultants.io</a>
                        </div>
                    </div>
                    <div className="col-md-6 offset-md-2 col-sm-8">
                        <div className="links">
                            <ul>
                                <li>
                                    <a href="#home">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#services">
                                        Services
                                    </a>
                                </li>

                                <li>
                                    <a href="#search">
                                       Team
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact-us">
                                       Contact
                                    </a>
                                </li>

                            </ul>
                            <hr/>
                            <div className="copyright">
                                <div className="pull-left">
                                    © <script>document.write(new Date().getFullYear())</script>{this.currentYear()}, made with <i className="fa fa-heart heart"></i> in San Francisco
                                </div>
                                {/*<div className="pull-right">
                                    <ul>
                                        <li>
                                            <a >
                                                Terms
                                            </a>
                                        </li>
                                        &nbsp; | &nbsp;
                                        <li>
                                            <a>
                                                Privacy
                                            </a>
                                        </li>
                                    </ul>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
  }
}

export default Footer
