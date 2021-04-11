import * as React from "react"
import {AiFillStar} from 'react-icons/ai'
import {GoArrowDown} from 'react-icons/go'
import {FaCertificate} from 'react-icons/fa'


import "./index.scss"

const CardProduct = ({title, img, price ,des,discount}) => (
    <div className="cardpro">
        <div className="cardpro_installment">Trả góp 0%</div>
        <img className="cardpro_photo" src={img} alt={title}/>
        <div className="cardpro_discount"><FaCertificate className="cardpro_discount_icon">%</FaCertificate> Giảm 2000.000<i className="cardpro_price_currency">đ</i></div>
        <div className="cardpro_content">
            <div className="cardpro_title">{title}</div>
            <div className="cardpro_price">
                <div className="cardpro_price_New">
                    {price}<i className="cardpro_price_currency">đ</i>
                </div>
                <div className="cardpro_price_discount">
                    {discount}<i className="cardpro_price_currency">đ</i>
                </div>
            </div>
            <div className = "cardpro_evaluate">
                <AiFillStar className='cardpro_evaluate_star'/>
                <AiFillStar className='cardpro_evaluate_star'/>
                <AiFillStar className='cardpro_evaluate_star'/>
                <AiFillStar className='cardpro_evaluate_star'/>
                <AiFillStar className='cardpro_evaluate_star'/>
                <span className='cardpro_evaluate_text'>đánh giá</span>
            </div>
            <div className="cardpro_des">
                <div className="cardpro_des_title">{des}</div>
                <div className="cardpro_des_arrow"><GoArrowDown/></div>
            </div>
            <ul className="cardpro_configuration">
                <li>Màn hình:	AMOLED, 6.67", Full HD+</li>
                <li>Hệ điều hành:	Android 11</li>
                <li>Camera sau:	Chính 108 MP & Phụ 8 MP, 5 MP, 2 MP</li>
                <li>Camera trước:	16 MP</li>
                <li>Chip:	Snapdragon 732G 8 nhân</li>
                <li>RAM:	8 GB</li>
                <li>Bộ nhớ trong:	128 GB</li>
                <li>SIM:	2 Nano SIM, Hỗ trợ 4G</li>
                <li>Pin:	5020 mAh, Sạc nhanh</li>
            </ul>
        </div>
    </div>
);
export default CardProduct;