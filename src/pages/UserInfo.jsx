import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInfo, clearUserInfo } from '../redux/slices/userSlice';
import { logout as logoutAction } from '../redux/slices/authSlice';

const UserInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);
  const { data: userInfo, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserInfo(token));
    }
  }, [token, dispatch]);

  const logoutUser = () => {
    dispatch(logoutAction());
    dispatch(clearUserInfo());
    navigate('/');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!userInfo) return <div>User not found or not authenticated.</div>;

  return (
    <div className="container mt-5">
      <h2>Your Information</h2>
      <div>
        <p><strong>Name:</strong> {userInfo.name}</p>
        <p><strong>Email:</strong> {userInfo.email}</p>
        <p><strong>Phone:</strong> {userInfo.phone}</p>
        <p><strong>Address:</strong> {userInfo.address}</p>
        <button
          onClick={logoutUser}
          className="bg-red-500 text-white px-4 py-2 mt-3 rounded hover:bg-red-600"
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default UserInfo;