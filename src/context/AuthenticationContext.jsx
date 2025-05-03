import { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

// Initial state and reducer
const initialState = {
  isAuthenticated: false,
  user: null,
  token: localStorage.getItem('token') || null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'LOGOUT':
      return {
        isAuthenticated: false,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

// AuthContext setup
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (state.token) {
      localStorage.setItem('token', state.token);
    } else {
      localStorage.removeItem('token');
    }
  }, [state.token]);

  // Login function
  const login = async (signInData) => {
    try {
      const res = await axios.post('http://localhost:9193/api/auth/login', signInData);
      dispatch({
        type: 'LOGIN',
        payload: { user: res.data.user, token: res.data.token },
      });
           
    } catch (error) {
      toast.error('Login failed: ' + (error.response?.data?.message || error.message));
    }
  };

  // Sign up function (with auto-login after successful signup)
  const signUp = async (signUpData) => {
    try {
      const res = await axios.post('http://localhost:9193/api/auth/signup', signUpData);
      toast.success('Signup successful!');
      
      // Automatically log the user in after signup
      login({ email: signUpData.email, password: signUpData.password });
      
      return res.data;

    } catch (error) {
      toast.error('Signup failed: ' + (error.response?.data?.message || error.message));
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ state, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
