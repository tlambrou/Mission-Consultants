import React, { Component } from 'react'
import '../pk2-pro-html-v2/assets/css/paper-kit.css'
import '../pk2-pro-html-v2/assets/css/bootstrap.min.css'
import '../pk2-pro-html-v2/assets/css/nucleo-icons.css'
import Label from './Label'

export class ProfileFrameworks extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: this.props.items
    }
  }

  renderLabels() {
    const items = this.state.items
    var colorIndex = -1
    return items.map((item) => {
      colorIndex++
      const modColorIndex = colorIndex % 6
      console.log('color index: ', modColorIndex)
      return <Label text={item} color={modColorIndex} key={item} />
    })
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="card card-pricing">
          <div className="card-body">
            <h6 className="card-category">Frameworks</h6>
            <div className="card-icon">
              <i className="nc-icon nc-atom"></i>
            </div>
            <p className="card-description">
              {this.renderLabels()}
            </p>

          </div>
        </div>
      </div>
    )
  }
}

export default ProfileFrameworks
