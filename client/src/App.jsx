import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import Home from "./containers/Home";
import Registration from "./containers/Registration";

import Dashboard from "./containers/Dashboard";
import ServiceProvider from "./containers/ServiceProvider";
import DemoSite from "./containers/DemoSite";
import Signup from "./containers/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/provider" element={<ServiceProvider />} />
        <Route path="/demo" element={<DemoSite />} />
        <Route path="/demo/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
