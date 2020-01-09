import React, {Component} from 'react';
import back from '../pic/back.jpg';
import node from '../pic/nodelogo.jpg'

import { Button, Container, Row,Col, Image, Nav,Navbar,Card} from 'react-bootstrap';



class Home extends Component{
    render(){
        return(
            <div className="container">
              <div  styles={{ backgroundImage:`url(${node})` }}>
              

          
            <h3>Hello, I'm Enikansaye Mayowa,
                <span>I'm a fullstack developer</span>
            </h3>

            </div>
            </div>
        )
    }
}
export default Home;