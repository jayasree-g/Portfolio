import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "./tailwind.css"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={Home} />
        <Route path="/contact" Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
