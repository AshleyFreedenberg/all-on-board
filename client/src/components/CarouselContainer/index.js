import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import slider1 from '../../slider1.jpg';
import slider2 from '../../slider2.jpg';
import slider3 from '../../slider3.jpg';
import slider4 from '../../slider4.jpg';
import slider5 from '../../slider5.jpg';
import slider6 from '../../slider6.jpg';
import "./styles.css";


class CarouselContainer extends Component {
    render() {
        return (
            <div>

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>PAPERWORK SUCKS</h3>
                            <p>Manage compliance, easily onboard and engage new employees</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>GET YOUR SHIP TOGETHER</h3>
                            <p>SPEED up the collection of employees forms and certifications</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider5}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>KNOT A DIFFICULT PROCESS</h3>
                            <p>REDUCE the number of HR personnel you need for onboarding</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
           </div>
        )
    };
}
export default CarouselContainer;