import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Global.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/HomeFile/Home";
import Paint from "./pages/PaintFile/Paint";
import Visitors from "./pages/VisitorsFile/Visitors";
import Museo from "./pages/MuseoFile/Museo";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/fguerin-painting" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Paint" element={<Paint />} />
        <Route path="/Visitors" element={<Visitors />} />
        <Route path="/Museo" element={<Museo />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
