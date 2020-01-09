import React, {Component} from 'react';
import html from '../pic/htmllogo.png'
import react from '../pic/reactlogo.png';
import js from '../pic/jslogo.png';
import node from '../pic/nodelogo.jpg';
import { Button, Container, Row,Col, Image, Nav,Navbar,Card} from 'react-bootstrap';



class Footer extends Component{
    render(){
        return(
            <div className="container">
<Container>
<Row>
    <Col xs={6} md={4}>
      
    </Col>
    <Col xs={6} md={4}>
    
    </Col>
    <Col xs={6} md={4}>
      
    </Col>
  </Row>
  </Container>

            
            <div class="footer-copyright">
              <div class="container">
              © 2014 Copyright Text
              <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
              </div>
            </div>
          </div>
        )
    }
}
export default Footer;