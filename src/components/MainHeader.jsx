import { useState } from 'react';
import { FaHeart, FaShoppingCart, FaBars } from 'react-icons/fa';
import logoImg from '../assets/img/logo.png';
import Cart from './Cart';
import CartDropdown from './Cart';

const MainHeader = () => {
  
  return (
    <div id="header">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="header-logo">
              <a href="#" className="logo">
                <img src={logoImg} alt="" />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="header-search">
              <form>
                <select className="input-select">
                  <option value="0">All Categories</option>
                  <option value="1">Category 01</option>
                  <option value="1">Category 02</option>
                </select>
                <input className="input" placeholder="Search here" />
                <button className="search-btn">Search</button>
              </form>
            </div>
          </div>
          <div className="col-md-3 clearfix">
            <div className="header-ctn">
              <div>
                <a href="#">
                  <FaHeart />
                  <span>Your Wishlist</span>
                  <div className="qty">2</div>
                </a>
              </div>
              <CartDropdown/>
              <div className="menu-toggle">
                <a href="#">
                  <FaBars />
                  <span>Menu</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;