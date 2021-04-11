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
            <StaticImage src= "https://hoanghamobile.com/i/home/Uploads/2021/04/09/web-nokia.png"/>
            <StaticImage src= "https://hoanghamobile.com/i/home/Uploads/2021/04/06/web-banner-realme-7.png"/>
            <StaticImage src="https://hoanghamobile.com/i/home/Uploads/2021/03/13/hutbuixiaomi-bannerwebdesktop.jpg"/>
            <StaticImage src="https://hoanghamobile.com/i/home/Uploads/2021/04/03/mi-fan-web.png"/>
            {/* <StaticImage src="https://cdn.tgdd.vn/2021/03/banner/800-300-800x300-28.png"/> */}
        </Slider>
    </div>)
}
export default Banner;