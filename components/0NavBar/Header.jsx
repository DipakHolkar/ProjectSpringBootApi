import React, { Component, useState } from 'react'
import * as ReactBootStrap from "react-bootstrap";
import home from './Home.css'
import { Nav, NavDropdown } from "react-bootstrap"
import { useHistory } from 'react-router-dom'


function Header() {


  const [flag,setFlag] = useState(false);
  const history = useHistory();

  function loginPage() {
    this.props.history.push('login');
  }

  function aboutUs() {
    this.props.history.push('aboutus');
  }


  function signupPage() {
    this.props.history.push('signup');
  }


  function logout() {

    localStorage.clear();
    console.log(localStorage.getItem('loggedinuser'))
    history.push("/login")

  }

 

  return (
    
    <div className='header'>

      <header>
        <ReactBootStrap.Navbar className="navbar navbar-expand-lg navbar-light bg-dark ">
          <ReactBootStrap.Navbar.Brand ><img src="./images/courselogo.jpg" width="60" height="50"></img></ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Brand style={{ color: 'white' }} href="#home">e-Course-Network</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-ReactBootStrap.Navbar-ReactBootStrap.Nav" />

          <ReactBootStrap.Navbar.Collapse id="responsive-ReactBootStrap.Navbar-ReactBootStrap.Nav">
            <ReactBootStrap.Nav className="me-auto">

              <ReactBootStrap.Nav.Link className='click' href="/" style={{ color: 'white' }} >Home</ReactBootStrap.Nav.Link>

              <ReactBootStrap.Nav.Link className='click' href="/aboutus" style={{ color: 'white' }} onClick={aboutUs}>About Us</ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
                       <ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link className='click' href="/login" style={{ color: 'white' }} onClick={loginPage}>LOGIN</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link className='click' href="signup" style={{ color: 'white' }} onClick={signupPage} >SIGNUP</ReactBootStrap.Nav.Link>
              
              
              </ReactBootStrap.Nav>
              
              <Nav>
                <ReactBootStrap.Nav.Link className='click' style={{ color: 'white' }} onClick={logout} >LOGOUT</ReactBootStrap.Nav.Link>
              </Nav>

            
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </header>


    </div>
  )
}


export default Header;
