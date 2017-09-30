import React, { Component } from 'react'
import Navbar from './Navbar'
import Results from './Results'

import Sunset from '../pk2-pro-html-v2/assets/img/sections/bruno-abatti.jpg'
import Background from '../pk2-pro-html-v2/assets/img/sections/mika-matin.jpg'
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

export class Search extends React.Component {
  render() {
    return (
      <section className="search">
        <div className="wrapper">
          <div className="main">
            <div className="section section-white section-search">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 offset-md-3 col-xs-12 text-center">
                    <form role="search" className="form-inline search-form">
                      <div className="input-group no-border">
                        <span className="input-group-addon addon-xtreme no-border" id="basic-addon1"><i className="fa fa-search"></i></span>
                        <input type="text" className="form-control input-xtreme no-border" placeholder="Find a Geek" aria-describedby="basic-addon1" />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="row">
                  <Results />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Search
