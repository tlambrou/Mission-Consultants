import React, { Component } from 'react'
import Navbar from './Navbar'
import Sunset from '../pk2-pro-html-v2/assets/img/sections/bruno-abatti.jpg'
import Background from '../pk2-pro-html-v2/assets/img/farid-askerov.jpg'
import Homes from '../pk2-pro-html-v2/assets/img/sections/fabio-mangione.jpg'

export const background = {
  backgroundImage: `url( ${ Background } )`
}

const sunset = {
  backgroundImage: `url( ${ Sunset } )`
}

const homes = {
  backgroundImage: `url( ${ Homes } )`
}

export class Header extends Component {
  render() {
    return (
      <div className="header-2">
        <Navbar />
        <div className="page-header" style={ background }>
          <div className="filter">
            
          </div>
          <div className="content-center">
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2 text-center">
                  <h1 className="title"> Your next great product made a reality</h1>
                  <h5 className="description">We're Mission Consultants: a consortium of elite geeks providing versatile professional solutions in full-stack web, iOS, and graphic design.</h5>
                  <br/>
                </div>
                <div className="col-lg-10 offset-md-1">
                  <a className="btn btn-magnify btn-lg btn-round btn-danger" href="" role="button"><i className="nc-icon nc-zoom-split"></i> Search Available Contractors</a>
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
