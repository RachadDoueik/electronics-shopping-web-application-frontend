import { FaHeart, FaBars } from 'react-icons/fa';
import logoImg from '../assets/img/logo.png';
import CartDropdown from './CartDropdown';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


const MainHeader = () => {

  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div id="header">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="header-logo">
              <Link to="/">
                <img src={logoImg} alt="" />
              </Link>
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
          { isAuthenticated &&
          <div className="col-md-3 clearfix">
            <div className="header-ctn">
              <div className="justify-content-between">
                <a href="#">
                  <FaHeart />
                  <br></br>
                  <span>Your Wishlist</span>
                  <div className="qty">2</div>
                </a>
              </div>
              <CartDropdown/>
              <div className="menu-toggle">
                <a href="#">
                  <FaBars />
                  <br/>
                  <span>Menu</span>
                </a>
              </div>
            </div>
          </div>
               }
        </div>
      </div>
    </div>
  );
};

export default MainHeader;