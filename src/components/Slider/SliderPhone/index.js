import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProduct from "../../Card/CardProduct/index"
import './index.scss'
const dataSliderPhone= [
    {
        title :"Samsung Galaxy A52 5G",
        img: "https://hoanghamobile.com/i/preview/Uploads/2020/09/17/51kGDXeFZKL._SL1024_.jpg",
        price: "15.0000",
        discount: "14.0000",
       des: "Thông số kĩ thuật  "
    },
    {
        title :"Samsung Galaxy A52 5G",
        img: "https://hoanghamobile.com/i/preview/Uploads/2020/11/06/iphone-12-pro-max.png",
        price: "15.000.000",
        discount: "14.000.000",
       des: "Thông số kĩ thuật  "
    },
    {
        title :"Samsung Galaxy A52 5G",
        img: "https://hoanghamobile.com/i/preview/Uploads/2020/11/06/apple-iphone-12-mini-3.png",
        price: "15.0000",
        discount: "14.0000",
        des: "Thông số kĩ thuật  "
    },
    {
        title :"Samsung Galaxy A52 5G",
        img: "https://hoanghamobile.com/i/preview/Uploads/2020/11/27/yellow.png",
        price: "15.0000",
        discount: "14.0000",
       des: "Thông số kĩ thuật  "
    },
    {
        title :"Samsung Galaxy A52 5G",
        img: "https://hoanghamobile.com/i/preview/Uploads/2020/11/27/yellow.png",
        price: "15.0000",
        discount: "14.0000",
       des: "Thông số kĩ thuật  "
    },
    {
        title :"Samsung Galaxy A52 5G",
        img: "https://hoanghamobile.com/i/preview/Uploads/2020/11/27/yellow.png",
        price: "15.0000",
        discount: "14.0000",
       des: "Thông số kĩ thuật  "
    },
]
const SliderPhone = () => {
    var settings = {
        dots: false,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 1000,
        arrows: false,
        autoplay: true,
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
              breakpoint: 600,
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
        <div className="SliderPhone">
            <div className="SliderPhone_title">
               <i className="SliderPhone_title_left"></i> Giá Sốc Trong Tuần <i className="SliderPhone_title_right"></i>
            </div>
           <Slider {...settings} className="SliderPhone_slider">
               {dataSliderPhone.map((item,index) => (
                        <CardProduct key={index} title={item.title} price={item.price} img={item.img} des={item.des} discount={item.discount}/>
               ))}
                
            </Slider>
        </div>
    )
}
export default SliderPhone;