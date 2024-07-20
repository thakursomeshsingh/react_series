import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Service from './Component/Service';
import Navbar from './Navbar';
import GetURLParams from './Component/GetURLParams';
import Dashboard from './Component/Dashboard';
import Profile from './Component/Profile';
import Setting from './Component/Setting';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/geturl" element={<GetURLParams />} />
          <Route path="/dashboard/" element={<Dashboard />} >
          
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
