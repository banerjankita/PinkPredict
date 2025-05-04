import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Predict from "./components/predict";
import Contact from "./components/contact";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from './components/ScrollToTop';
import DrAi from "./components/drai";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/predict" element={<Predict />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/drai" element={<DrAi />} />
          </Routes>
        </div>
        
        <ToastContainer
          position="top-right"
          autoClose={3000}
          pauseOnHover={true}
          draggable={true}
          theme="colored"
          closeOnClick
        />
      </div>
    </Router>
  );
}

export default App;



