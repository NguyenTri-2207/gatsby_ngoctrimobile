import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import {FaCartPlus} from 'react-icons/fa'
import './index.scss'
import logo from '../../images/logo1.jpg'
const Search =() => {
    
      return (
  
        <div className="search">
          <a className="search_logo" href="#">
              <img src={logo} alt="ngoctrimobile" />
              <h1>NgocTriMobile</h1>
          </a>
          <form  className="search_form">
              <input className="search_form_text" placeholder="Bạn cần gì ?"/>
              <button className="search_form_button" type="button">ssđ<BiSearchAlt2 className="icon"/></button>
          </form>
          <button className="search_cart">sdsd<FaCartPlus className="cart"/></button>
        </div>
      );
    }
export default Search;