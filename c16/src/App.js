import React from 'react';
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { useState } from "react";

// function _App() {

//   return (
//     <div className="App">
//       <nav style={{ backgroundColor: "teal" }}>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="contact" element={<Contact />} />
//       </Routes>
//     </div>
//   );
// }

function App() {

  return (
    <div className="App" style={{ height: "100vh" }}>
      <nav style={{ backgroundColor: "teal" }}>
        <Link to="/invoices">Invoices</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;