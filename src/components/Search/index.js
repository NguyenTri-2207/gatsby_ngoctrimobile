import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import {FaCartPlus} from 'react-icons/fa'
import {BiMenuAltLeft}  from 'react-icons/bi'
import './index.scss'
import logo from '../../images/logo1.jpg'
const Search =() => {
    
      return (
  
        <div className="search">
          <div className="search_menuMobile">
            <button><BiMenuAltLeft className="iconMobile"/></button>
          </div>
          <a className="search_logo" href="#">
              <img src={logo} alt="ngoctrimobile" />
              <h1>NgocTriMobile</h1>
          </a>
          <form  className="search_form">
              <input className="search_form_text" placeholder="Bạn cần gì ?"/>
              <button className="search_form_button" type="button"><BiSearchAlt2 className="icon"/></button>
          </form>
          <button className="search_cart"><FaCartPlus className="cart"/></button>
        </div>
      );
    }
export default Search;