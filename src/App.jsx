import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import ReCaptchaProvider from "./components/common/ReCaptchaProvider";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Report from "./pages/Report";
import './App.css'

function App() {

  return (
    <ReCaptchaProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report/>} />
        </Routes>
      </Router>
    </ReCaptchaProvider>
  );
}

export default App;