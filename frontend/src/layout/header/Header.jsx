import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__up">
        <div className="header__up__left">
          <div>
            <i class="fa-brands fa-facebook-f"></i>
          </div>
          <div>
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div>
            <i class="fa-brands fa-pinterest-p"></i>
          </div>
          <div>
            <i class="fa-brands fa-snapchat"></i>
          </div>
          <div>
            <i class="fa-brands fa-youtube"></i>
          </div>
        </div>
        <div className="header__up__middle">
          <p>Free shipping for standard order over $100</p>
        </div>
        <div className="header__up__right">
          <p>fashe@example.com</p>
        </div>
      </div>
      <div className="header__down">
        <div className="header__down__left">
          <img
            src="https://preview.colorlib.com/theme/fashe/images/icons/logo.png"
            alt=""
          />
        </div>
        <div className="header__down__middle">
          <ul>
            <Link to={"/"}>Home</Link>
            <li>Shop</li>
            <li>Sale</li>
            <li>Features</li>
            <li>BLog</li>
            <Link to={"/wishlist"}>Wishlist</Link>
            <Link to={"/add"}>Add</Link>
          </ul>
        </div>
        <div className="header__down__right">
          <div>
            <i class="fa-regular fa-circle-user"></i>
          </div>
          <div>
            <i class="fa-solid fa-bag-shopping"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
