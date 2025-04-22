import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Sell from './pages/Sell';
import Estimate from './pages/Estimate';
import TestDrive from './pages/TestDrive';
import Admin from './pages/Admin';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/estimate" element={<Estimate />} />
        <Route path="/test-drive" element={<TestDrive />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
