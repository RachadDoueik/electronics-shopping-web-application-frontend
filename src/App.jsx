import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import Header from "./components/Header";
import UserInfo from "./pages/UserInfo";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthenticationContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<AuthPage/>} />
        <Route path="/account" element={<UserInfo />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;