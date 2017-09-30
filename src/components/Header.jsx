import React, { Component } from 'react'
import Navbar from './Navbar'
import Sunset from '../pk2-pro-html-v2/assets/img/sections/bruno-abatti.jpg'
import Background from '../pk2-pro-html-v2/assets/img/sections/mika-matin.jpg'
import Homes from '../pk2-pro-html-v2/assets/img/sections/fabio-mangione.jpg'

import { * } from '../images/'

export const background = {
  backgroundImage: `url( ${ Background } )`
}

const sunset = {
  backgroundImage: `url( ${ Sunset } )`
}

const homes = {
  backgroundImage: `url( ${ Homes } )`
}

export class Header extends React.Component {
  render() {
    return (
      <div className="header-3">
        <div className="page-carousel">
          <div className="filter"></div>
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className=""></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1" className=""></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2" className="active"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item">
                <div className="page-header" style={background}>
                  <div className="filter"></div>
                  <div className="content-center">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6 text-left">
                          <h1 className="title">Paper Kit 2 PRO</h1>
                          <h5>Now you have no excuses, it's time to surprise your clients, your competitors, and why not, the world. You probably won't have a better chance to show off all your potential if it's not by designing a website for your own agency or web studio.</h5>
                          <br/>
                            <div className="buttons">
                              <a href="#pablo" className="btn btn-danger btn-round  btn-lg">
                                Read More
                              </a>
                              <a href="#pablo" className="btn btn-neutral btn-link btn-just-icon">
                                <i className="fa fa-twitter"></i>
                              </a>
                              <a href="#pablo" className="btn btn-neutral btn-link btn-just-icon">
                                <i className="fa fa-facebook-square"></i>
                              </a>
                              <a href="#pablo" className="btn btn-neutral btn-link btn-just-icon">
                                <i className="fa fa-get-pocket"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item active">
                  <div className="page-header" style={sunset}>
                    <div className="filter"></div>
                    <div className="content-center">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-8 offset-2 text-center">
                            <h1 className="title">Awesome Experiences</h1>
                            <h5>Now you have no excuses, it's time to surprise your clients, your competitors, and why not, the world. You probably won't have a better chance to show off all your potential if it's not by designing a website for your own agency or web studio.</h5>
                            <br/>
                              <h6>Connect with us:</h6>
                              <div className="buttons">
                                <a href="#pablo" className="btn btn-neutral btn-link btn-just-icon">
                                  <i className="fa fa-twitter"></i>
                                </a>
                                <a href="#pablo" className="btn btn-neutral btn-link btn-just-icon">
                                  <i className="fa fa-facebook-square"></i>
                                </a>
                                <a href="#pablo" className="btn btn-neutral btn-link btn-just-icon">
                                  <i className="fa fa-instagram"></i>
                                </a>
                                <a href="#pablo" className="btn btn-neutral btn-link btn-just-icon">
                                  <i className="fa fa-google-plus"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="page-header" style={homes}>
                      <div className="filter"></div>
                      <div className="content-center">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-7 offset-5 text-right">
                              <h2 className="title">Premium Offers for Venice</h2>
                              <h5>Now you have no excuses, it's time to surprise your clients, your competitors, and why not, the world. You probably won't have a better chance to show off all your potential if it's not by designing a website for your own agency or web studio.</h5>
                              <br/>
                                <div className="buttons">

                                  <a href="#pablo" className="btn btn-neutral btn-link btn-lg">
                                    <i className="fa fa-share-alt"></i> Share Offer
                                    </a>
                                    <a href="#pablo" className="btn btn-success btn-round btn-lg">
                                      <i className="fa fa-shopping-cart"></i> Shop Now
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <a className="left carousel-control carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="fa fa-angle-left"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="right carousel-control carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="fa fa-angle-right"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                </div>
              )
            }
          }

          export default Header
