import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import './App.css'

const App = () => {
  return (
    <Router>
      <h1 className="text-4xl text-red-500">App is Loading</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ps1" element={<h1>PS1 Page</h1>} />
        <Route path="/ps2" element={<h1>PS2 Page</h1>} />
        <Route path="/ps3" element={<h1>PS3 Page</h1>} />
        <Route path="/ps4" element={<h1>PS4 Page</h1>} />
        <Route path="/ps5" element={<h1>PS5 Page</h1>} />
        <Route path="/psp" element={<h1>PSP Page</h1>} />
        <Route path="/ps-vita" element={<h1>PS Vita Page</h1>} />
      </Routes>
    </Router>
  )
}

export default App;