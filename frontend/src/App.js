import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Dashboard from './components/Dashboard';
import CraneDetails from './components/CraneDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/crane-details" element={<CraneDetails />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;