import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthenticationContext';
import axios from 'axios';

const UserInfo = () => {
  const { state  , logout } = useAuth(); // Contains { user, token }
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    navigate('/');
  }

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await axios.get('http://localhost:9193/api/users/account', {
          headers: {
            Authorization: `Bearer ${state.token}`,
            Accept: 'application/json',
          },
        });
        setUserInfo(res.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (state.token) {
      fetchUserInfo();
    } else {
      setLoading(false);
    }
  }, [state.token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userInfo) {
    return <div>User not found or not authenticated.</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Your Information</h2>
      <div>
        <p><strong>Name:</strong> {userInfo.name}</p>
        <p><strong>Email:</strong> {userInfo.email}</p>
        <p><strong>Phone:</strong> {userInfo.phone}</p>
        <p><strong>Address:</strong> {userInfo.address}</p>
        <button onClick={() => logoutUser()}>LOGOUT</button>
      </div>
    </div>
  );
};

export default UserInfo;
