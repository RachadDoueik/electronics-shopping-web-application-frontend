import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import AuthFormWrapper from '../components/AuthFormWrapper';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const [signInData, setSignInData] = useState({ email: '', password: '' });
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: ''
  });

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:9193/api/auth/login', signInData);
      localStorage.setItem('token', res.data.token);
      setSignInData({ email: '', password: '' });
    } catch (error) {
      toast.error('Login failed: ' + (error.response?.data?.message || error.message));
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:9193/api/auth/signup', signUpData);
      setSignUpData({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        role: 'USER'
      });
      setIsSignIn(true);
    } catch (error) {
      toast.error('Signup failed: ' + (error.response?.data?.message || error.message));
    }
  };

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
              {isSignIn ? (
                <SignInForm 
                  formData={signInData} 
                  setFormData={setSignInData} 
                  handleSubmit={handleSignInSubmit} 
                />
              ) : (
                <SignUpForm 
                  formData={signUpData} 
                  setFormData={setSignUpData} 
                  handleSubmit={handleSignUpSubmit} 
                />
              )}
            </AuthFormWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
