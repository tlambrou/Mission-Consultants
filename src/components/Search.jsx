import React, { Component } from 'react'
import Results from './Results'
// import data from '../Data'
import Fuse from 'fuse.js'
import axios from 'axios'

import '../pk2-pro-html-v2/assets/css/bootstrap.min.css'
import '../pk2-pro-html-v2/assets/css/nucleo-icons.css'
import '../pk2-pro-html-v2/assets/css/paper-kit.css'

export class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      search: "",
      slugs: [
        "Tony-Cioara",
        "chris-mauldin",
        "Joe",
        "shane-austrie",
        "Ansel-Bridgewater",
        "fernando-arocho",
        "michael_loubier",
        "tassos",
        "Sky-Xu",
        "TJ-King"
      ],
      contractors: [],
      updatedContractors: false
    }
  }

  componentWillMount(){
    console.log('componentDidMount')
    axios.get('http://localhost:8000/allmspf')
    .then(response => {
      if (response.status === 200) {
        const data = this.state.slugs.map((slug) => {
          return response.data.filter((profile) => {
            return profile.slug === slug
          })[0]
        })
        console.log("Data:", data)
        return this.setState({contractors: data, updatedContractors: true})
      }
    })
    .catch(error => {
      console.log('error!', error)
    })
  }

  runSearch(text) {
    if (text === "" && this.state.updatedContractors === true) {
      return this.state.contractors.sort((first, second) => {
        const nameFirst = first.last_name + first.first_name
        const nameSecond = second.last_name + second.first_name
        if (nameFirst === nameSecond) {
          return 0
        } else if (nameFirst > nameSecond) {
          return 1
        } else if (nameFirst < nameSecond) {
          return -1
        } else {
          return 0
        }
      })
    } else {
      var options = {
        keys: [
          'first_name',
          'last_name',
          'professional_title',
          'about_description'
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
      var fuse = new Fuse(this.state.contractors, options)
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

  renderResults() {
    if (this.state.updatedContractors === true){
      return <Results results={ this.runSearch(this.state.search) } />
    } else {
      return (
        <a href="" className="btn btn-round">
          <div className='uil-reload-css reload-small'>
            <div>
            </div>
          </div>   Loading Contractors...</a>
        )
      }
    }

    render() {

      return (
        <section className="search" id="search">
          {console.log(this.state.contractors)}
          <div className="wrapper">
            <div className="main">
              <div className="section section-gray section-search">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12 text-center card card-raised card-form-horizontal no-transition mc-search">
                      <div className="card-block">
                        <form onSubmit={(e) => {this.formSubmit(e)}} role="search" className="form-inline search-form">
                          <div className="input-group no-border">
                            <span className="input-group-addon addon-xtreme no-border" id="basic-addon1"><i className="fa fa-search"></i></span>
                            <input
                              type="text"
                              onChange={this.changeSearch.bind(this)}
                              className="form-control input-xtreme no-border"
                              placeholder="Find a Pro"
                              aria-describedby="basic-addon1"
                              />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    {this.renderResults()}
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
