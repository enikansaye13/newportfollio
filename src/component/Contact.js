import React, {Component} from 'react';
import { Button, Container, Row, Form  } from 'react-bootstrap';



class Contact extends Component{
    render(){
        return(
          <div className="container">

<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label></Form.Label>
    <Form.Control type="textarea" placeholder="massage" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
          </div>
        )
        }

}
          
export default Contact;