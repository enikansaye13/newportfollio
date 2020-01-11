import React, { Component } from 'react';
import pic from '../pic/personal.jpg';
import { Button, Container, Row, Col, Image, Media } from 'react-bootstrap';




class About extends Component {
  render() {
    return (
      <div className="container good"  >
        <img
          width={200}
          height={220}
          className="mr-3 mypiv"
          src={pic}
          alt="personal.jpg" rounded-corners
        />
      <h2>Challenges only makes us get Better</h2>
      <p>
          I'm a Software developer. i write javascript <br></br>
          I love to get better in what i do<br></br>
          <a href="https://docs.google.com/document/d/1aPDJl8SJV0nQivAPYbwp9M6YR3bXogIxCbkqqZIcIEE/edit?usp=sharing">view my resume(links)</a></p>
      </div>
    )
  }
}
export default About;