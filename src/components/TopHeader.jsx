import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaDollarSign, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TopHeader = () => {

  const { isAuthenticated } = useSelector((state) => state.auth);
  
  return (
    <div id="top-header">
      <div className="container">
        <ul className="header-links pull-left">
          <li className='align-center'><a href="#"><FaPhoneAlt color="red" />  +961-71-494-437</a></li>
          <li className='align-center'><a href="#"><FaEnvelope color="red" />  rashaddweik20@gmail.com</a></li>
          <li><a href="#"><FaMapMarkerAlt color="red" /> Beirut</a></li>
        </ul>
        <ul className="header-links pull-right">
          <li><a href="#"><FaDollarSign color="red" /> USD</a></li>
          {isAuthenticated ? (<li><Link to='/account'><FaUserAlt color="red" />My Account</Link></li>) 
          : (<li><Link to='/authentication'><FaUserAlt color="red" /> Sign In</Link></li>)}
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;
