import React from 'react'
import { Link } from 'gatsby'
import {BsPhone} from 'react-icons/bs'
import {FiWatch} from 'react-icons/fi'
import {FaLaptopCode} from 'react-icons/fa'
import {AiFillTablet} from 'react-icons/ai'
import {FaHeadphones} from 'react-icons/fa'
import {FaTools} from 'react-icons/fa'
import './index.scss'
const Menu =() => {
    
      return (
  
        <div className="menu">
            <ul className="menu_ul">
                <li className="menu_li"><Link className="link" to="#"><BsPhone className="icon"/><p>Điện thoại</p></Link></li>
                <li className="menu_li"><Link className="link" to="#"><FiWatch className="icon"/><p>Đồng Hồ</p></Link></li>
                <li className="menu_li"><Link className="link" to="#"><FaLaptopCode className="icon"/><p>LapTop</p></Link></li>
                <li className="menu_li"><Link className="link" to="#"><AiFillTablet className="icon"/><p>Máy Tính Bảng</p></Link></li>
                <li className="menu_li"><Link className="link" to="#"><FaHeadphones className="icon"/><p>Tai Nghe</p></Link></li>
                <li className="menu_li"><Link className="link" to="#"><FaTools className="icon"/><p>Sữa Chữa</p></Link></li>
            </ul>
         
        </div>
      );
    }
export default Menu;