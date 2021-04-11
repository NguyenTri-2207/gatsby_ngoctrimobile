import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardHeader from '../Card/CardHeader';
import './index.scss'
import { GoNoNewline } from 'react-icons/go';
const dataCardMenu= [
    {title :"Garmin giảm sốc, ưu đãi cực khủng"},
    {title:"Sale sốc đồ gia dụng "},
    {title:"Loa-tai nghe giảm sốc"},
    {title:"Mi Fan Festival"},
    {title :"Garmin giảm sốc"},
]
const MenuBot = () => {
    var settings = {
        dotsClass: "slick-dots slick-thumb",
        arrows: false ,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1360,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
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