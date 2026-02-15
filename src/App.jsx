import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Global Styles
import "./index.css";

// Layout Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Page Components
import Home from "./Pages/Home";

import Accommodation from "./Pages/Accommodation";
import Dining from "./Pages/Dining";
import About from "./Pages/About";
import TajMahal from "./Pages/TajMahal";
import Sadar from "./Pages/Sadar";

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/dining" element={<Dining />} />
            {/* Experience Sub-Pages */}
            <Route path="/experiences/taj-mahal" element={<TajMahal />} />
            <Route path="/experiences/sadar" element={<Sadar />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
