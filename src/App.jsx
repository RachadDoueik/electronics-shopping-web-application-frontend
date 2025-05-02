import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
function App() {
  return (
      <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<AuthPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;