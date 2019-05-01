import React, { Component } from "react";
import { Link } from 'react-router-dom';
import aob from '../../aob.png'
import slider1 from '../../slider1.jpg'
import slider2 from '../../slider2.jpg'
import slider3 from '../../slider3.jpg'

import "./style.css";

class Slider extends Component {

    render() {
        return (
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={slider1} className="d-block w-100" alt="Slider1"/>
              </div>
                            <div className="carousel-item">
                                <img src={slider2} className="d-block w-100" alt="Slider2"/>
              </div>
                                <div className="carousel-item">
                                    <img src={slider3} className="d-block w-100" alt="Slider3" />
              </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                   
                                </a>
                            </div>
                        </div>
                        );
                    }
                }
                
                
export default Slider;