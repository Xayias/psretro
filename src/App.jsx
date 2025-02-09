import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'

const App = () => {
  return (
    <Router>
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