import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaDollarSign, FaUserAlt } from 'react-icons/fa';

const TopHeader = () => {
  return (
    <div id="top-header">
      <div className="container">
        <ul className="header-links pull-left">
          <li><a href="#"><FaPhoneAlt color='red' /> +021-95-51-84</a></li>
          <li><a href="#"><FaEnvelope color='red' /> email@email.com</a></li>
          <li><a href="#"><FaMapMarkerAlt  color='red'/> 1734 Stonecoal Road</a></li>
        </ul>
        <ul className="header-links pull-right">
          <li><a href="#"><FaDollarSign  color='red'/> USD</a></li>
          <li><a href="#"><FaUserAlt  color='red'/> My Account</a></li>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;