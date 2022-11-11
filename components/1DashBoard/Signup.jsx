import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap";


export default class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

    this.studnetSignupPage = this.studnetSignupPage.bind(this);
    this.instituteSignupPage = this.instituteSignupPage.bind(this);

  }

  studnetSignupPage() {
    this.props.history.push('addstudent');
  }

  instituteSignupPage() {
    this.props.history.push('instituteregister')
  }

  render() {
    return (
      <div className=''>
        <div className='signuppage'>
          <div className="row">
            <div className="col-sm-6">
              <div className="card" style={{ backgroundColor: "lightgray", marginTop: "60px" }}>
                <div className="card-body">
                  <h5 className="card-title">Student SignUp</h5>
                  <p className="card-text">Fill your information below and get best course.</p>
                  <a href="/studentregister" onClick={this.studnetSignupPage} className="btn btn-info">Sign Up</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card" style={{ backgroundColor: "lightgray", marginTop: "60px" }}>
                <div className="card-body">
                  <h5 className="card-title">Institute SignUp</h5>
                  <p className="card-text">Fill your information below and serve your best coaching.</p>
                  <a href="/instituteregister" onClick={this.instituteSignupPage} className="btn btn-success">Sign Up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
