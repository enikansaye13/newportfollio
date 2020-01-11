import React, { Component } from 'react';
import Background from '../pic/back.jpg';
import node from '../pic/nodelogo.jpg'

import { Button, Container, Row, Col, Image, Nav, Navbar, Card } from 'react-bootstrap';



class Home extends Component {
  render() {
    // const mystyle = {
    //   color: "white",
    //   backgroundImage: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fsmartphone-laptop-keyboard_1421-1031.jpg%3Fsize%3D626%26ext%3Djpg&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photo%2Fcellphone-headphone-laptop-keypad-colored-background_2978662.htm&docid=2yBdavw0DyB0XM&tbnid=x4oVz4T2QPEXQM%3A&vet=12ahUKEwj1uN7lnvbmAhWR4YUKHb5cAow4yAEQMyhTMFN6BQgBEL4B..i&w=626&h=418&bih=656&biw=1366&q=colored%20background%20image%20with%20a%20laptop&ved=2ahUKEwj1uN7lnvbmAhWR4YUKHb5cAow4yAEQMyhTMFN6BQgBEL4B&iact=mrc&uact=8",
    //   padding: "10px",
    //   fontFamily: "Arial",
    // }

    return (
      <div className="container">

        <div className="background">

          {/* {{ backgroundImage:`url(${node})` }}> */}
          {/* <img className=" background d-block w-100"
            src={Background}
            alt="back.js"
          /> */}
          <h3 className="backtext">Hello,<span> I'm Enikansaye Mayowa, </span><br></br>I'm a fullstack developer.
          </h3>

        </div>
      </div>

    )
  }
}
export default Home;