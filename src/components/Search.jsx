import React, { Component } from 'react'
import Results from './Results'
import data from '../Data'
import Fuse from 'fuse.js'

import '../pk2-pro-html-v2/assets/css/paper-kit.css'
import '../pk2-pro-html-v2/assets/css/bootstrap.min.css'
import '../pk2-pro-html-v2/assets/css/nucleo-icons.css'


export class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      search: ""
    }
  }

  runSearch(text) {
    if (text === "") {
      return data.contractors.sort((first, second) => {
        const nameFirst = first.lastName + first.firstName
        const nameSecond = second.lastName + second.firstName
        if (nameFirst == nameSecond) {
          return 0
        } else if (nameFirst > nameSecond) {
          return 1
        } else if (nameFirst < nameSecond) {
          return -1
        }
      })
    } else {
      var options = {
        keys: [
          'firstName',
          'lastName',
          'title',
          'tech.languages',
          'tech.frameworks',
          'tech.toolsAndLibraries',
          'tech.databasesAndORMs',
          'tech.other',
          'skills.technical',
          'skills.nonTechnical'
        ],
        shouldSort: true,
        tokenize: true,
        findAllMatches: false,
        threshold: 0,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
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
      <section className="search" id="search">
        <div className="wrapper">
          <div className="main">
            <div className="section section-gray section-search">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 offset-md-3 col-xs-12 text-center card card-raised card-form-horizontal no-transition mc-search">
                    <div className="card-block">
                      <form onSubmit={(e) => {
                          this.formSubmit(e);    /* handle onSumbit from the search bar here */
                        }} role="search" className="form-inline search-form">
                        <div className="input-group no-border">
                          <span className="input-group-addon addon-xtreme no-border" id="basic-addon1"><i className="fa fa-search"></i></span>
                        <input type="text" onChange={this.changeSearch.bind(this)} className="form-control input-xtreme no-border" placeholder="Find a Pro" aria-describedby="basic-addon1"/>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="container">
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
