import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardHeader from '../Card/CardHeader';

const dataCardMenu= [
    title="abc",
]
const MenuBot = () => {
    var settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div className="MenuBot">
           <Slider {...settings} className="banner_slider">
                <CardHeader title="dfdfd"/>
            </Slider>
        </div>
    )
}
export default MenuBot;