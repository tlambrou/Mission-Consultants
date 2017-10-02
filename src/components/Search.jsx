import React, { Component } from 'react'
import Navbar from './Navbar'
import Results from './Results'
import data from '../Data'
import Fuse from 'fuse.js'

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
  constructor(props) {
    super(props)
    this.state = {
      search: ""
    }
  }

  runSearch(text) {
    if (text == "") {
      return data.contractors
    } else {
      var options = {
        keys: ['firstName', 'lastName', 'title', 'tech.languages', 'tech.frameworks', 'tech.toolsAndLibraries', 'tech.databasesAndORMs', 'tech.other', 'skills.technical', 'skills.nonTechnical'],
        shouldSort: true,
        includeMatches: false,
        threshold: 0,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 2
      }
      var fuse = new Fuse(data.contractors, options)
      var result = fuse.search(text)
      return result
    }

  }

  changeSearch(event) {
    var text = event.target.value
    this.setState({ search: text })

  }

  formSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <section className="search">
        <div className="wrapper">
          <div className="main">
            <div className="section section-white section-search">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 offset-md-3 col-xs-12 text-center">
                    <form onSubmit={(e) => {
                        this.formSubmit(e);    /* handle onSumbit from the search bar here */
                      }} role="search" className="form-inline search-form">
                      <div className="input-group no-border">
                        <span className="input-group-addon addon-xtreme no-border" id="basic-addon1"><i className="fa fa-search"></i></span>
                        <input type="text" onChange={this.changeSearch.bind(this)} className="form-control input-xtreme no-border" placeholder="Find a Geek" aria-describedby="basic-addon1" />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="row">
                  <Results results={ this.runSearch(this.state.search) } />
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
