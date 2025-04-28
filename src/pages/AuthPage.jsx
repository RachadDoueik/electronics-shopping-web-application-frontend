import React, { useState } from 'react';
import Header from '../components/Header';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import AuthFormWrapper from '../components/AuthFormWrapper';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="auth-tabs">
              <button 
                className={`auth-tab ${isSignIn ? 'active' : ''}`}
                onClick={() => setIsSignIn(true)}
              >
                <FaSignInAlt /> Sign In
              </button>
              <button 
                className={`auth-tab ${!isSignIn ? 'active' : ''}`}
                onClick={() => setIsSignIn(false)}
              >
                <FaUserPlus /> Sign Up
              </button>
            </div>
            
            <AuthFormWrapper>
              {isSignIn ? <SignInForm /> : <SignUpForm />}
            </AuthFormWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;