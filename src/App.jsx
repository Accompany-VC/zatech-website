import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ReCaptchaProvider from "./components/common/ReCaptchaProvider";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ErrorBoundary from "./components/common/ErrorBoundary";
import './App.css'

const Home = lazy(() => import("./pages/Home"));
const Report = lazy(() => import("./pages/Report"));
const SponsorshipPage = lazy(() => import("./pages/Sponsorship"));

function App() {

  return (
    <ReCaptchaProvider>
      <ErrorBoundary>
        <Router>
          <Navbar />
          <Suspense fallback={<div className="section"><div className="container">Loading...</div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/report" element={<Report/>} />
              <Route path="/sponsorship" element={<SponsorshipPage/>} />
            </Routes>
          </Suspense>
          <Footer />
        </Router>
      </ErrorBoundary>
    </ReCaptchaProvider>
  );
}

export default App;