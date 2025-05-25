import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import Header from "./components/Header";
import UserInfo from "./pages/UserInfo";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { clearUserInfo } from "../src/redux/slices/userSlice";
import { logout } from "../src/redux/slices/authSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
   const token = localStorage.getItem("token");

  // In a useEffect when user logs in
  useEffect(() => {
   
    if (!token) return;

    const decoded = jwtDecode(token);
    const expiryTime = decoded.exp * 1000; // convert to ms
    const now = Date.now();

    if (expiryTime <= now) {
      dispatch(clearUserInfo());
      dispatch(logout());
    }
  }, [token]);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<AuthPage />} />
        <Route path="/account" element={<UserInfo />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
