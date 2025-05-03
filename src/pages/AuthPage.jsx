import React, { useState  , useEffect, use } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import AuthFormWrapper from '../components/AuthFormWrapper';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { useAuth } from '../context/AuthenticationContext';
import { useNavigate } from 'react-router-dom';   

const AuthPage = () => {

  const { state , login , signUp } = useAuth();
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.isAuthenticated == true) {
      navigate('/');
    }}, [state.isAuthenticated]);

  const [signInData, setSignInData] = useState({ email: '', password: '' });
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    role: 'USER'
  });

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    login(signInData);
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const response = await signUp(signUpData);
    if (response) {
      setSignUpData({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
      });
      login({
        email: signUpData.email,
        password: signUpData.password,
      });
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
