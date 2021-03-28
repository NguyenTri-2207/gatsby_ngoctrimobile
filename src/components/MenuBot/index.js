import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardHeader from '../Card/CardHeader';

const dataCardMenu= [
    {title :"1"},
    {title:"2"},
    {title:"3"},
    {title:"4"},
    {title :"5"},
    {title:"6"},
    {title:"7"},
    {title:"8"},
]
const MenuBot = () => {
    var settings = {
        dots: false,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 1000,
        arrows: false,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    return(
        <div className="MenuBot">
           <Slider {...settings} className="banner_slider">
               {dataCardMenu.map((item,index) => (
                        <CardHeader key={index} title={item.title}/>
               ))}
                
            </Slider>
        </div>
    )
}
export default MenuBot;