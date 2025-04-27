// src/components/Header.jsx
import { FaPhone, FaEnvelope, FaMapMarker, FaDollarSign, FaUser, FaHeart, FaShoppingCart, FaBars, FaClose, FaArrowCircleRight } from 'react-icons/fa';
import '../css/Header.css'; // We'll create this next
import logo from '../assets/img/logo.png';
import product01 from '../assets/img/product01.png';
import product02 from '../assets/img/product02.png';

const Header = () => {
  const [cartOpen, setCartOpen] = React.useState(false);
  
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <header>
      {/* TOP HEADER */}
      <div id="top-header">
        <div className="container">
          <ul className="header-links pull-left">
            <li><a href="#"><FaPhone /> +021-95-51-84</a></li>
            <li><a href="#"><FaEnvelope /> email@email.com</a></li>
            <li><a href="#"><FaMapMarker /> 1734 Stonecoal Road</a></li>
          </ul>
          <ul className="header-links pull-right">
            <li><a href="#"><FaDollarSign /> USD</a></li>
            <li><a href="#"><FaUser /> My Account</a></li>
          </ul>
        </div>
      </div>
      {/* /TOP HEADER */}

      {/* MAIN HEADER */}
      <div id="header">
        <div className="container">
          <div className="row">
            {/* LOGO */}
            <div className="col-md-3">
              <div className="header-logo">
                <a href="#" className="logo">
                  <img src={logo} alt="Company Logo" />
                </a>
              </div>
            </div>
            {/* /LOGO */}

            {/* SEARCH BAR */}
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
            {/* /SEARCH BAR */}

            {/* ACCOUNT */}
            <div className="col-md-3 clearfix">
              <div className="header-ctn">
                {/* Wishlist */}
                <div>
                  <a href="#">
                    <FaHeart />
                    <span>Your Wishlist</span>
                    <div className="qty">2</div>
                  </a>
                </div>
                {/* /Wishlist */}

                {/* Cart */}
                <div className={`dropdown ${cartOpen ? 'open' : ''}`}>
                  <button className="dropdown-toggle" onClick={toggleCart}>
                    <FaShoppingCart />
                    <span>Your Cart</span>
                    <div className="qty">3</div>
                  </button>
                  {cartOpen && (
                    <div className="cart-dropdown">
                      <div className="cart-list">
                        <div className="product-widget">
                          <div className="product-img">
                            <img src={product01} alt="Product" />
                          </div>
                          <div className="product-body">
                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                            <h4 className="product-price"><span className="qty">1x</span>$980.00</h4>
                          </div>
                          <button className="delete"><FaClose /></button>
                        </div>

                        <div className="product-widget">
                          <div className="product-img">
                            <img src={product02} alt="Product" />
                          </div>
                          <div className="product-body">
                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                            <h4 className="product-price"><span className="qty">3x</span>$980.00</h4>
                          </div>
                          <button className="delete"><FaClose /></button>
                        </div>
                      </div>
                      <div className="cart-summary">
                        <small>3 Item(s) selected</small>
                        <h5>SUBTOTAL: $2940.00</h5>
                      </div>
                      <div className="cart-btns">
                        <a href="#">View Cart</a>
                        <a href="#">Checkout <FaArrowCircleRight /></a>
                      </div>
                    </div>
                  )}
                </div>
                {/* /Cart */}

                {/* Menu Toggle */}
                <div className="menu-toggle">
                  <a href="#">
                    <FaBars />
                    <span>Menu</span>
                  </a>
                </div>
                {/* /Menu Toggle */}
              </div>
            </div>
            {/* /ACCOUNT */}
          </div>
        </div>
      </div>
      {/* /MAIN HEADER */}
    </header>
  );
}; 
export default Header;