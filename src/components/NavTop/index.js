import React from 'react';
import "./index.scss";
import {Link} from "gatsby"
const NavTop = () =>{
 
    return (
      <div className="NavTop">
        <ul>
          <li><Link className="link" to="/gioi-thieu-cong-ty">Giới thiệu</Link></li>
          <li><Link  className="link" to="/san-pham-da-xem">Sản phẩm đã xem</Link></li>
          <li><Link  className="link" to="/trung-tam-bao-hanh">Trung tâm bảo hành</Link></li>
          <li><Link  className="link" to="/tuyen-dung">Tuyển dụng</Link></li>
          <li><Link  className="link" to="/order/check">Tra cứu đơn hàng</Link></li>
          <li><Link  className="link" id="login-modal" to="/Account/Login?ReturnUrl=/">Đăng nhập</Link></li>
        </ul>
      </div>
    );
  }
export default NavTop;