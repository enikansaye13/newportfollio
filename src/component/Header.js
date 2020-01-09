import React, {Component} from 'react';
import Home from './Home';
import { Button, Container, Row,Col, Image, Nav,Navbar} from 'react-bootstrap';



class Header extends Component{
    render(){
        return(
 <div className="container">          
 <Navbar bg="primary" variant="">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>
</div>
        )
    }
}
export default Header;