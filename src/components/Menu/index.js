import React from 'react'
import { Link } from 'gatsby'
import {BsPhone} from 'react-icons/bs'
// import {IoWatch} from 'react-icons/io'
import {FaLaptopCode} from 'react-icons/fa'
import {AiFillTablet} from 'react-icons/ai'
import {FaHeadphones} from 'react-icons/fa'
import {FaTools} from 'react-icons/fa'
import {FaCartPlus} from 'react-icons/fa'
import './index.scss'
const Menu =() => {
    
      return (
  
        <div className="menu">
            <ul className="menu_ul">
                <li className="menu_li"><Link to="#"><BsPhone/><p>Điện thoại</p></Link></li>
                {/* <li className="menu_li"><Link to="/"><IoWatch/><p>Đồng Hồ</p></Link></li> */}
                <li className="menu_li"><Link to="#"><FaLaptopCode/><p>LapTop</p></Link></li>
                <li className="menu_li"><Link to="#"><AiFillTablet/><p>Máy Tính Bảng</p></Link></li>
                <li className="menu_li"><Link to="#"><FaHeadphones/><p>Tai Nghe</p></Link></li>
                <li className="menu_li"><Link to="#"><FaTools/><p>Sữa Chữa</p></Link></li>
                <li className="menu_li"><Link to="#"><FaCartPlus/><p></p></Link></li>
            </ul>
         
        </div>
      );
    }
export default Menu;