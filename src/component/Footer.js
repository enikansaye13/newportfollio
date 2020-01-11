import React, { Component } from 'react';
import html from '../pic/htmllogo.png'
import react from '../pic/reactlogo.png';
import js from '../pic/jslogo.png';
import node from '../pic/nodelogo.jpg';
import { Button, Container, Row, Col, Image, Nav, Navbar, Card } from 'react-bootstrap';



class Footer extends Component {
  render() {
    return (
      <div className="container ">
        <Navbar bg="primary" variant="">
        <a href="https://github.com/enikansaye13">github Links</a>
        <div class="footer-copyright">
          <div class="container">
           <a href="#"> © enikansaye13@gmail.com </a>
          </div>
        </div>
        </Navbar>
      </div>
    )
  }
}
export default Footer;