import React, { Component } from 'react'

export class Label extends Component {
  constructor(props) {
    super(props)
    var color
    // Set the class that corresponds to the number passed into the props
    switch (props.color) {
      case 0:
        color = "label label-default"
        break
      case 1:
        color = "label label-primary"
        break
      case 2:
        color = "label label-success"
        break
      case 3:
        color = "label label-info"
        break
      case 4:
        color = "label label-warning"
        break
      case 5:
        color = "label label-danger"
        break
      default:
        color = "label label-default"
        break
    }

    this.state = {
      text: this.props.text,
      color: color
    }
  }

  render() {
    return (
      <span className={this.state.color}>{this.state.text}</span>
    )
  }
}

export default Label
