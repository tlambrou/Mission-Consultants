import React, { Component } from 'react'
import Input from './Input'

export class ContactUs extends Component {

  constructor(props) {
    super(props)
    this.state = {
      contact: {
        company: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      },
      robot: false
    }
  }

  currentYear() {
    var now = new Date()
    return now.getFullYear()
  }

  render() {
    return (
      <div className="section-white" id="contact-us">
        <div
          className="contactus-1 section-image"
          style={{backgroundImage: 'url("/pk2-pro-html-v2/assets/img/sections/jan-sendereks.jpg")'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-11 offset-md-1">
                <div className="card card-contact no-transition">
                  <h3 className="card-title text-center">
                    Contact Us
                  </h3>
                  <div className="row">
                    <div className="col-md-5 offset-md-1">
                      <form id="contact-form" method="post">
                        <div className="card-block">
                          <Input
                            text={this.state.contact.company}
                            onChange={(newValue) => this.setState({contact: {company: newValue}})}
                            validation="([a-zA-Z0-9@.,]{2,})"
                            placeholder="Name of Company or DBA"
                            label="Company"
                            />
                          <div className="row">
                            <div className="col-md-6">
                              <Input
                                text={this.state.contact.firstName}
                                onChange={(newValue) => this.setState({contact: {firstName: newValue}})}
                                placeholder="First Name"
                                label="First Name"
                                />
                            </div>
                            <div className="col-md-6">

                              <Input
                                text={this.state.contact.lastName}
                                onChange={(newValue) => this.setState({contact: {lastName: newValue}})}
                                placeholder="Last Name"
                                label="Last Name"
                                />
                            </div>
                          </div>
                          <Input
                            type="email"
                            label="Email Address"
                            text={this.state.contact.email}
                            onChange={(newValue) => this.setState({contact: {email: newValue}})}
                            placeholder="Email"
                            validation="(?:[a-z0-9!#$%'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%'*+/=?^_`{|}~-]+)*|(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])"
                            />
                          <Input
                            text={this.state.contact.phone}
                            onChange={(newValue) => this.setState({contact: {phone: newValue}})}
                            placeholder="Phone Number"
                            label="Phone Number"
                            validation="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
                            />
                          <div className="form-group label-floating">
                            <label className="control-label">
                              Project Details/Message
                            </label>
                            <textarea
                              name="message"
                              className="form-control"
                              id="message"
                              rows={6}
                              placeholder="Include the details of your project and/or inquiry here" />
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="checkbox">
                                <input id="checkbox1" type="checkbox" />
                                <label htmlFor="checkbox1">
                                  <small>I'm not a robot !</small>
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <button
                                type="submit"
                                className="btn btn-primary pull-right">Send Message
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-5 ">
                      <div className="card-block">

                        <div className="info info-horizontal">
                          <div className="icon icon-danger">
                            <i
                            className="nc-icon nc-badge"
                            aria-hidden="true" />
                            </div>
                            <div className="description">
                            <h4 className="info-title">
                            Drop Us a Line
                            </h4>
                            <p> +1 415-868-5262<br />
                          Mon - Fri, 9:00-17:00 PST
                            </p>
                            </div>
                          </div>
                          <div className="info info-horizontal">
                            <div className="icon icon-info">
                              <i
                                className="nc-icon nc-pin-3"
                                aria-hidden="true" />
                            </div>
                            <div className="description">
                              <h4 className="info-title">
                                Our Office
                              </h4>
                              <p> Mission Consultants<br />1547 Mission St<br />San Francisco, CA 94143</p>
                            </div>

                          </div>
                        </div>
                      </div>
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

  export default ContactUs
