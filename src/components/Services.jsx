import React, { Component } from 'react'
import Background1 from '../pk2-pro-html-v2/assets/img/sections/ana-bernardo.jpg'
import Background2 from '../pk2-pro-html-v2/assets/img/sections/angelo-pantazis.jpg'
import Background3 from '../pk2-pro-html-v2/assets/img/sections/rawpixel-comm.jpg'
import Background4 from '../pk2-pro-html-v2/assets/img/sections/rawpixel-coms.jpg'

export const background1 = {
  backgroundImage: `url( ${ Background1 } )`
}
export const background2 = {
  backgroundImage: `url( ${ Background2 } )`
}
export const background3 = {
  backgroundImage: `url( ${ Background3 } )`
}
export const background4 = {
  backgroundImage: `url( ${ Background4 } )`
}

export class Services extends Component {

  renderColoredCards() {
    return (
      <div className="row">
        <div className="col-md-3">
          <div className="card card-pricing" data-color="blue">
            <div className="card-body">
              <h6 className="card-category">iOS Development</h6>
              <div className="card-icon">
                <i className="nc-icon nc-mobile"></i>
              </div>
              {/*<h3 className="card-title">$199</h3>*/}

              <p className="card-description">
                <dl className="row">
                  <dt className="col-sm-3">
                    <img alt="" className="icon icons8-Swift-Filled" width="25" height="25" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAABmUlEQVRIS72WjVHCQBCFv1eBUoF2oB0oFYgdSAViBUIFQgVSglSgdmAJ2AFUsM7L5PSAhIQf2ZlMmJvsfrfvdvcQJzDljIi4BR6B3gHsN2Ai6SPF+IVExAPwekDwdde+pKkXC0iZwfsRASlU1xkliFO8+wfITFIvQWIPwBI4a/BbSOocApkA18DNNpBs5Zlsy2RWI2Wxy4hwFdWCmiB27gAXwBMwrpCnC3yVj7/bsCaIHUbAJXAF9AGXpH8nG0kabqvONhAHc3Cb9R+WoFSJBaSU3BnlGyic2kIWgGXx207ziBgAL5ZRkmV0r/ntabFibSF2KkCSvNvCIsKZGVqsRYQzej4EUgnKA2bZtcpkDnzXlKUzus+HX5bZznK5ZC2Dh6Zl8YG6w702TYNvLRNP8I3513QmA0nu6tZW1ZhNEAd3Q3pkW8JKKwvAjfgJuOpWDr8NJAX2lPaTzssN6sCW0zKlwjBoZZrvAmkt2dqHS0nnJ71PKitj3+1nfn83Y9mx/3vHZw3ljFwh+17F7iVX5Ljy38oRpKkN8QM1fcIamDHgigAAAABJRU5ErkJggg=="/>

                  </dt>
                  <dd className="col-sm-9"><p className="text-left"><small>Lastest Swift 4.0 Design Patterns</small></p></dd>

                  <dt className="col-sm-3"><i className="nc-icon nc-box-2"></i></dt>
                  <dd className="col-sm-9"><p className="text-left"><small>iOS Frameworks and Libraries</small></p></dd>

                </dl>
              </p>

              <div className="card-footer">
                <a href="#contact-us" className="btn btn-neutral btn-round">Explore Rates</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card card-pricing" data-color="green">
            <div className="card-body">
              <h6 className="card-category">Fullstack Web Development</h6>
              <div className="card-icon">
                <i className="nc-icon nc-world-2"></i>
              </div>
              {/*<h3 className="card-title">$199</h3>*/}

              <p className="card-description">
                <dl className="row">
                  <dt className="col-sm-3"><i className="nc-icon nc-briefcase-24"></i></dt>

                  <dd className="col-sm-9"><p className="text-left"><small>The Most Powerful Web Frameworks & Databases</small></p></dd>

                  <dt className="col-sm-3"><i className="nc-icon nc-ruler-pencil"></i></dt>
                  <dd className="col-sm-9"><p className="text-left"><small>JS, Python, Ruby, PHP, HTML, CSS </small></p></dd>

                </dl>
              </p>

              <div className="card-footer">
                <a href="#contact-us" className="btn btn-neutral btn-round">Explore Rates</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card card-pricing" data-color="yellow">
            <div className="card-body">
              <h6 className="card-category">Front-end Web Development</h6>
              <div className="card-icon">
                <i className="nc-icon nc-compass-05"></i>
              </div>
              {/*<h3 className="card-title">$199</h3>*/}

              <p className="card-description">
                <dl className="row">
                  <dt className="col-sm-3"><i className="nc-icon nc-album-2"></i></dt>

                  <dd className="col-sm-9"><p className="text-left"><small>Pixel-Perfect Mobile Responsive Designs</small></p></dd>

                  <dt className="col-sm-3"><i className="nc-icon nc-atom"></i></dt>
                  <dd className="col-sm-9"><p className="text-left"><small>React/Angular with the latest best practices</small></p></dd>

                </dl>
              </p>

              <div className="card-footer">
                <a href="#contact-us" className="btn btn-neutral btn-round">Explore Rates</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card card-pricing" data-color="orange">
            <div className="card-body">
              <h6 className="card-category">UI/UX Design</h6>

              <div className="card-icon">
                <span className="icon-simple"><i className="nc-icon nc-diamond"></i></span>
              </div>
              {/*<h3 className="card-title">$599</h3>*/}

              <p className="card-description">
                <dl className="row">
                  <dt className="col-sm-3"><i className="nc-icon nc-satisfied"></i></dt>

                  <dd className="col-sm-9"><p className="text-left"><small>User Researched Best Practices and Behavior</small></p></dd>

                  <dt className="col-sm-3"><i className="nc-icon nc-planet"></i></dt>
                  <dd className="col-sm-9"><p className="text-left"><small>Designs that speak to your customers</small></p></dd>

                </dl>
              </p>
              <div className="card-footer">
                <a href="#contact-us" className="btn btn-neutral btn-round">Explore Rates</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderImageCards() {
    return (
      <div className="row">
        <div className="col-md-3">
          <div className="card" data-background="image" style={background1}>
            <div className="card-block">
              <h6 className="card-category">iOS Development</h6>
              <div className="card-icon">
                <i className="nc-icon nc-mobile"></i>
              </div>
              <p className="card-description">
              </p><dl className="row">
              <dt className="col-sm-3">
                <img alt="" className="icon icons8-Swift-Filled" width="25" height="25" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAABmUlEQVRIS72WjVHCQBCFv1eBUoF2oB0oFYgdSAViBUIFQgVSglSgdmAJ2AFUsM7L5PSAhIQf2ZlMmJvsfrfvdvcQJzDljIi4BR6B3gHsN2Ai6SPF+IVExAPwekDwdde+pKkXC0iZwfsRASlU1xkliFO8+wfITFIvQWIPwBI4a/BbSOocApkA18DNNpBs5Zlsy2RWI2Wxy4hwFdWCmiB27gAXwBMwrpCnC3yVj7/bsCaIHUbAJXAF9AGXpH8nG0kabqvONhAHc3Cb9R+WoFSJBaSU3BnlGyic2kIWgGXx207ziBgAL5ZRkmV0r/ntabFibSF2KkCSvNvCIsKZGVqsRYQzej4EUgnKA2bZtcpkDnzXlKUzus+HX5bZznK5ZC2Dh6Zl8YG6w702TYNvLRNP8I3513QmA0nu6tZW1ZhNEAd3Q3pkW8JKKwvAjfgJuOpWDr8NJAX2lPaTzssN6sCW0zKlwjBoZZrvAmkt2dqHS0nnJ71PKitj3+1nfn83Y9mx/3vHZw3ljFwh+17F7iVX5Ljy38oRpKkN8QM1fcIamDHgigAAAABJRU5ErkJggg=="/>

              </dt>
              <dd className="col-sm-9"><p className="text-left"><small>Lastest Swift 4.0 Design Patterns</small></p></dd>

              <dt className="col-sm-3"><i className="nc-icon nc-tile-56"></i></dt>
              <dd className="col-sm-9"><p className="text-left"><small>iOS Frameworks and Libraries</small></p></dd>

            </dl>
            <p></p>

            <div className="card-footer">
              <a href="#pablo" className="btn btn-link btn-neutral">
                <i className="fa fa-book" aria-hidden="true"></i> Show more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" data-background="image" style={background2}>
            <div className="card-block">
              <h6 className="card-category">Frontend Web Development</h6>
              <div className="card-icon">
                <i className="nc-icon nc-compass-05"></i>
              </div>
              <p className="card-description">
              </p><dl className="row">
              <dt className="col-sm-3">
                <img alt="" className="icon icons8-Swift-Filled" width="25" height="25" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAABmUlEQVRIS72WjVHCQBCFv1eBUoF2oB0oFYgdSAViBUIFQgVSglSgdmAJ2AFUsM7L5PSAhIQf2ZlMmJvsfrfvdvcQJzDljIi4BR6B3gHsN2Ai6SPF+IVExAPwekDwdde+pKkXC0iZwfsRASlU1xkliFO8+wfITFIvQWIPwBI4a/BbSOocApkA18DNNpBs5Zlsy2RWI2Wxy4hwFdWCmiB27gAXwBMwrpCnC3yVj7/bsCaIHUbAJXAF9AGXpH8nG0kabqvONhAHc3Cb9R+WoFSJBaSU3BnlGyic2kIWgGXx207ziBgAL5ZRkmV0r/ntabFibSF2KkCSvNvCIsKZGVqsRYQzej4EUgnKA2bZtcpkDnzXlKUzus+HX5bZznK5ZC2Dh6Zl8YG6w702TYNvLRNP8I3513QmA0nu6tZW1ZhNEAd3Q3pkW8JKKwvAjfgJuOpWDr8NJAX2lPaTzssN6sCW0zKlwjBoZZrvAmkt2dqHS0nnJ71PKitj3+1nfn83Y9mx/3vHZw3ljFwh+17F7iVX5Ljy38oRpKkN8QM1fcIamDHgigAAAABJRU5ErkJggg=="/>

              </dt>
              <dd className="col-sm-9"><p className="text-left"><small>Lastest Swift 4.0 Design Patterns</small></p></dd>

              <dt className="col-sm-3"><i className="nc-icon nc-tile-56"></i></dt>
              <dd className="col-sm-9"><p className="text-left"><small>iOS Frameworks and Libraries</small></p></dd>

            </dl>
            <p></p>
            <div className="card-footer">
              <a href="#pablo" className="btn btn-link btn-neutral">
                <i className="fa fa-book" aria-hidden="true"></i> Show more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" data-background="image" style={background3}>
            <div className="card-block">
              <h6 className="card-category">Fullstack Web Development</h6>
              <div className="card-icon">
                <i className="nc-icon nc-world-2"></i>
              </div>
              <p className="card-description">
              </p><dl className="row">
              <dt className="col-sm-3">
                <img alt="" className="icon icons8-Swift-Filled" width="25" height="25" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAABmUlEQVRIS72WjVHCQBCFv1eBUoF2oB0oFYgdSAViBUIFQgVSglSgdmAJ2AFUsM7L5PSAhIQf2ZlMmJvsfrfvdvcQJzDljIi4BR6B3gHsN2Ai6SPF+IVExAPwekDwdde+pKkXC0iZwfsRASlU1xkliFO8+wfITFIvQWIPwBI4a/BbSOocApkA18DNNpBs5Zlsy2RWI2Wxy4hwFdWCmiB27gAXwBMwrpCnC3yVj7/bsCaIHUbAJXAF9AGXpH8nG0kabqvONhAHc3Cb9R+WoFSJBaSU3BnlGyic2kIWgGXx207ziBgAL5ZRkmV0r/ntabFibSF2KkCSvNvCIsKZGVqsRYQzej4EUgnKA2bZtcpkDnzXlKUzus+HX5bZznK5ZC2Dh6Zl8YG6w702TYNvLRNP8I3513QmA0nu6tZW1ZhNEAd3Q3pkW8JKKwvAjfgJuOpWDr8NJAX2lPaTzssN6sCW0zKlwjBoZZrvAmkt2dqHS0nnJ71PKitj3+1nfn83Y9mx/3vHZw3ljFwh+17F7iVX5Ljy38oRpKkN8QM1fcIamDHgigAAAABJRU5ErkJggg=="/>

              </dt>
              <dd className="col-sm-9"><p className="text-left"><small>Lastest Swift 4.0 Design Patterns</small></p></dd>

              <dt className="col-sm-3"><i className="nc-icon nc-tile-56"></i></dt>
              <dd className="col-sm-9"><p className="text-left"><small>iOS Frameworks and Libraries</small></p></dd>

            </dl>
            <p></p>
            <div className="card-footer">
              <a href="#pablo" className="btn btn-link btn-neutral">
                <i className="fa fa-book" aria-hidden="true"></i> Show more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" data-background="image" style={background4}>
            <div className="card-block">
              <h6 className="card-category">Design</h6>
              <div className="card-icon">
                <i className="nc-icon nc-diamond"></i>
              </div>
              <p className="card-description">
              </p><dl className="row">
              <dt className="col-sm-3">
                <img alt="" className="icon icons8-Swift-Filled" width="25" height="25" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAABmUlEQVRIS72WjVHCQBCFv1eBUoF2oB0oFYgdSAViBUIFQgVSglSgdmAJ2AFUsM7L5PSAhIQf2ZlMmJvsfrfvdvcQJzDljIi4BR6B3gHsN2Ai6SPF+IVExAPwekDwdde+pKkXC0iZwfsRASlU1xkliFO8+wfITFIvQWIPwBI4a/BbSOocApkA18DNNpBs5Zlsy2RWI2Wxy4hwFdWCmiB27gAXwBMwrpCnC3yVj7/bsCaIHUbAJXAF9AGXpH8nG0kabqvONhAHc3Cb9R+WoFSJBaSU3BnlGyic2kIWgGXx207ziBgAL5ZRkmV0r/ntabFibSF2KkCSvNvCIsKZGVqsRYQzej4EUgnKA2bZtcpkDnzXlKUzus+HX5bZznK5ZC2Dh6Zl8YG6w702TYNvLRNP8I3513QmA0nu6tZW1ZhNEAd3Q3pkW8JKKwvAjfgJuOpWDr8NJAX2lPaTzssN6sCW0zKlwjBoZZrvAmkt2dqHS0nnJ71PKitj3+1nfn83Y9mx/3vHZw3ljFwh+17F7iVX5Ljy38oRpKkN8QM1fcIamDHgigAAAABJRU5ErkJggg=="/>

              </dt>
              <dd className="col-sm-9"><p className="text-left"><small>Lastest Swift 4.0 Design Patterns</small></p></dd>

              <dt className="col-sm-3"><i className="nc-icon nc-tile-56"></i></dt>
              <dd className="col-sm-9"><p className="text-left"><small>iOS Frameworks and Libraries</small></p></dd>

            </dl>
            <p></p>
            <div className="card-footer">
              <a href="#pablo" className="btn btn-link btn-neutral">
                <i className="fa fa-book" aria-hidden="true"></i> Show more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div id="services">
        <div className="wrapper">
          <section className="services">
            <div className="features-2">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 offset-md-2 text-center">
                    <h1 className="title">Our Services</h1>
                    <h5 className="description">Our contractors provide a wide array of services to make your company's products We offer the highest quality production of the following technologies and products. </h5>
                    <br/>
                  </div>
                </div>
                {this.renderColoredCards()}
              </div>
            </div>
          </section>
        </div>
        <div className="features-1">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2  text-center">
                <h2 className="title">What our consultants offer</h2>
                <h5 className="description">Software consulting services help you focus on what you really need and align technology, operational and financial objectives. We offer a blend of technology knowledge and analytical tools to help you create and transform applications, processes and operations in line with your unique possibilities.</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-air-baloon"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Mobile Apps</h4>
                    <p className="description">Mobile development isn't just about building an app anymore. Mobile is about building an experience that breaks the boundaries of platforms, locations, and devices. It&apos;s a flawless, smarter user-first experience that is consumed everywhere and on any device. </p>
                    {/*<a href="" className="btn btn-link btn-danger">See more</a>*/}
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info">
                  <div className="icon icon-success">
                    <i className="nc-icon nc-laptop"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Web Apps</h4>
                    <p>We build modern web applications of all shapes and sizes using the latest technologies. From online marketplaces and platforms to SaaS solutions, custom business software, and chrome extensions... whatever your idea, we can build it, on time and on budget.</p>
                    {/*<a href="" className="btn btn-link btn-danger">See more</a>*/}
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info">
                  <div className="icon icon-warning">
                    <i className="nc-icon nc-key-25"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Integrations</h4>
                    <p>To get the most out of your technology, it needs to play nice with others. We specialize in integrating enterprise technologies to improve efficiencies, reduce wasted time and effort, and increase visibility into the data and metrics that matter most. </p>
                    {/*<a href="" className="btn btn-link btn-danger">See more</a>*/}
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-palette"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Delightful design</h4>
                    <p>The user interface is the window through which the world experiences your brand and your product. A powerful user interface bridges the distance between the human brain and the digital product. Understanding human behavior is key to unlocking an exceptional user experience.</p>
                    {/*<a href="" className="btn btn-link btn-danger">See more</a>*/}
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

export default Services
