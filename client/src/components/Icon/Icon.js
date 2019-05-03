import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "./style.css";
import icon1 from '../../icon1.png';
import icon2 from '../../icon2.png';
import icon3 from '../../icon3.png';




class Icon extends Component {
  render() {
    return (
      <div>
        <Container>

          <Row>
            <Col s={4}>
              <Card className="mt-5" style={{ border: "none", textAlign: "center" }}>
                <Card.Img variant="top" src={icon1} className="icon-png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>

                </Card.Body>
              </Card>
            </Col>

            <Col s={4}>
              <Card className="mt-5" style={{ border: "none", textAlign: "center" }}>
                <Card.Img variant="top" src={icon2} className="icon-png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>

                </Card.Body>
              </Card>

            </Col>

            <Col s={4}>

              <Card className="mt-5" style={{ border: "none", textAlign: "center" }}>
                <Card.Img variant="top" src={icon3} className="icon-png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>

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