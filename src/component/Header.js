import React, {Component} from 'react';
import Home from './Home';
import { Button, Container, Row,Col, Image, Nav,Navbar} from 'react-bootstrap';
import About from './About'



class Header extends Component{
    render(){
        return(
 <div className="container">          
 <Navbar bg="primary" variant="">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/About">About</Nav.Link>
      <Nav.Link href="/Project">Project</Nav.Link>
      <Nav.Link href="/Contact">Contact</Nav.Link>
    </Nav>
  </Navbar>
</div>
        )
    }
}
export default Header;