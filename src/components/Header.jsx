import React, { Component } from 'react'
import Navbar from './Navbar'

export class Header extends Component {
  render() {
    return (
      <div id="home" className="header-2">
        <Navbar />
        <div className="page-header" style={{backgroundImage: `url(/img/backgrounds/gordon-mak-522710.jpg)`}}>
          <div className="filter"></div>
          <div className="content-center">
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2 text-center">
                  <h1 className="title"> Your next great product made a reality</h1>
                  <h5 className="description">We're Mission Consultants: a consortium of elite engineers and designers providing versatile professional solutions in full-stack web, iOS, and product/web design.</h5>
                  <br/>
                </div>
                <div className="col-lg-10 offset-md-1">
                  <a className="btn btn-magnify btn-lg btn-round btn-danger" href="#search" role="button"><i className="nc-icon nc-zoom-split"></i> Search Available Contractors</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
