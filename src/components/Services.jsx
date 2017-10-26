import React, { Component } from 'react'
import '../pk2-pro-html-v2/assets/css/bootstrap.min.css'
import '../pk2-pro-html-v2/assets/css/nucleo-icons.css'
import '../pk2-pro-html-v2/assets/css/paper-kit.css'
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
              </div>
            </div>
          </section>
        </div>
        <div className="features-1">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2  text-center">
                <h2 className="title">Why our products are the best</h2>
                <h5 className="description">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here.</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-palette"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Beautiful Gallery</h4>
                    <p className="description">Spend your time generating new ideas. You don't have to think of implementing.</p>
                    <a href="#pkp" className="btn btn-link btn-danger">See more</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-bulb-63"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">New Ideas</h4>
                    <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>
                    <a href="#pkp" className="btn btn-link btn-danger">See more</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-chart-bar-32"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Statistics</h4>
                    <p>Choose from a veriety of many colors resembling sugar paper pastels.</p>
                    <a href="#pkp" className="btn btn-link btn-danger">See more</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-sun-fog-29"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Delightful design</h4>
                    <p>Find unique and handmade delightful designs related items directly from our sellers.</p>
                    <a href="#pkp" className="btn btn-link btn-danger">See more</a>
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
