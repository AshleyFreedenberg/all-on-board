import React, { Component } from 'react';
import "./style.css";
import banner_image from '../../banner_image.jpg';
import banner_image2 from '../../banner_image2.jpg';






class Banner extends Component {
  render() {
    return (

        <img className="banner"  src={banner_image2} alt="banner"/>
   
    )
  };
}
export default Banner;