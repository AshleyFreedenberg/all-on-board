import React, { Component } from 'react';
import { Container, Row, Col, Card, } from 'react-bootstrap';
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
                  <Card.Title className="cardTitleText">REDUCE</Card.Title>
                  <Card.Text>
                    The number of HR personnel you need for onboarding!
    </Card.Text>

                </Card.Body>
              </Card>
            </Col>

            <Col s={4}>
              <Card className="mt-5" style={{ border: "none", textAlign: "center" }}>
                <Card.Img variant="top" src={icon2} className="icon-png" />
                <Card.Body>
                  <Card.Title className="cardTitleText">RECLAIM</Card.Title>
                  <Card.Text>
                    Your email inbox from employee clutter. Keep everything digital!
    </Card.Text>

                </Card.Body>
              </Card>

            </Col>

            <Col s={4}>

              <Card className="mt-5" style={{ border: "none", textAlign: "center" }}>
                <Card.Img variant="top" src={icon3} className="icon-png" />
                <Card.Body>
                  <Card.Title className="cardTitleText">REJOICE</Card.Title>
                  <Card.Text>
                    Because you have a partner that knows YOUR workforce.
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