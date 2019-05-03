import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "./style.css";





class Icon extends Component {
    render() {
        return (
           <div>
               <Container>

  <Row>
    <Col s={4}>
    <Card className="mt-5">
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </Col>
    <Col s={4}>
    
    <Card className="mt-5">
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

</Col>
    <Col s={4}>
    
    <Card className="mt-5" style={{border: "none"}}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

</Col>
  </Row>
</Container>
           </div>
        )    
    };
}
export default Icon;