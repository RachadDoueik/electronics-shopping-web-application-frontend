import React from 'react';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaMapMarker } from 'react-icons/fa';

const SignUpForm = () => {
  return (
    <div className="auth-form">
      <form>
        <div className="form-group">
          <label>Full Name</label>
          <div className="input-group">
            <span className="input-group-addon">
              <FaUser />
            </span>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Your Name" 
              required 
            />
          </div>
        </div>
        
        <div className="form-group">
          <label>Email</label>
          <div className="input-group">
            <span className="input-group-addon">
              <FaEnvelope />
            </span>
            <input 
              type="email" 
              className="form-control" 
              placeholder="Your Email" 
              required 
            />
          </div>
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <div className="input-group">
            <span className="input-group-addon">
              <FaLock />
            </span>
            <input 
              type="password" 
              className="form-control" 
              placeholder="Your Password" 
              required 
            />
          </div>
        </div>
        
        <div className="form-group">
          <label>Confirm Password</label>
          <div className="input-group">
            <span className="input-group-addon">
              <FaLock />
            </span>
            <input 
              type="password" 
              className="form-control" 
              placeholder="Confirm Password" 
              required 
            />
          </div>
        </div>
        
        <div className="form-group">
          <label>Phone</label>
          <div className="input-group">
            <span className="input-group-addon">
              <FaPhone />
            </span>
            <input 
              type="tel" 
              className="form-control" 
              placeholder="Your Phone Number" 
            />
          </div>
        </div>
        
        <div className="form-group">
          <label>Address</label>
          <div className="input-group">
            <span className="input-group-addon">
              <FaMapMarker />
            </span>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Your Address" 
            />
          </div>
        </div>
        
        <div className="form-group">
          <div className="checkbox">
            <label>
              <input type="checkbox" required /> I agree to the <a href="#">Terms & Conditions</a>
            </label>
          </div>
        </div>
        
        <button type="submit" className="primary-btn auth-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;