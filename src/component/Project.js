import React, { Component } from 'react';
import html from '../pic/htmllogo.png';
import react from '../pic/reactlogo.png';
import js from '../pic/jslogo.png';
import node from '../pic/nodelogo.jpg'
import { Button, Container, Row, Col, Image, Nav, Navbar, Card } from 'react-bootstrap';



class Project extends Component {
    render() {
        return (
            <div className="container nice">
                <Container>
                    <Row>
                        <Col xs={6} md={6}>


                            <h4>PROJECTS</h4>
                            <p>Keep it Clean <span>links to personal projects</span></p>
                            <p>Neflin <span>links to intra track projects</span></p>
                            <p>E-reporting <span>links to intertrack projects</span></p>
                            <p>Quiz app <span>links to javascrip quiz projects</span></p>
                        </Col>
                        <Col xs={6} md={6}  >
                            <h4>SKILLS</h4>
                            <img src={html}
                                alt="htmllogo.png"
                            />

                            <img src={react}
                                alt="reactlogo.png" height="20%"
                            />

                            <img src={js}
                                alt="jslogo.png" height="20%"
                            />

                            <img src={node}
                                alt="nodelogo.jpg" height="20%"
                            />

                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}
export default Project;