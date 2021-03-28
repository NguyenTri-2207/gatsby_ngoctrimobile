import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import './index.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    var settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
    <div className="banner">
        <Slider {...settings} className="banner_slider">
            <StaticImage src= "../../images/banner1.png"/>
            <StaticImage src="../../images/banner2.png"/>
            <StaticImage src="../../images/banner3.png"/>
            <StaticImage src="../../images/banner4.png"/>
        </Slider>
    </div>)
}
export default Banner;