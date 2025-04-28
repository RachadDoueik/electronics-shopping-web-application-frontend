import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaDollarSign, FaUserAlt } from 'react-icons/fa';
import { useNavigate , Link } from 'react-router-dom';

const TopHeader = () => {
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
          <li><Link to='/authentication'><FaUserAlt color="red" /> My Account</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;
