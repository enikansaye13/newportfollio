import React, {Component} from 'react';
import pic from '../pic/personal.jpg';
import { Button, Container, Row,Col, Image} from 'react-bootstrap';




class About extends Component{
    render(){
        return(
            <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" rounded />
    </Col>
    </Row>

            <div className="container">
           <h2>Challenges only makes us get Better</h2>
            <p> i'm a Software developer. i write javascript </p>
            <p>I love to get better in what i do</p>
            <p>view my resume(links)</p>
            </div>
            </Container>
        )
    }
}
export default About;