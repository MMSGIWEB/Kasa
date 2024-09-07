import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./datas/logements.json";
import '../src/styles/css/App.css';
import Home from './pages/Home';
import Fiche from "./pages/Fiche";
import About from "./pages/About";



function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
          errorElement={<Error />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/fiche"
          element={<Fiche />}
        />
        {/* <Route
          path="/about"
          element={<About />}
        /> */}
      </Routes>
    </Router>
  )
}

export default App;
