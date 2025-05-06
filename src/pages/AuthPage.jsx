import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import AuthFormWrapper from '../components/AuthFormWrapper';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, signUp } from '../redux/slices/authSlice';

const AuthPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const [isSignIn, setIsSignIn] = useState(true);
  const [signInData, setSignInData] = useState({ email: '', password: '' });
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    role: 'USER',
  });

  useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated]);

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    dispatch(login(signInData));
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(signUpData));
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
