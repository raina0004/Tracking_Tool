import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Sidebar from './Components.js/Sidebar';
import React, { useEffect, useState } from 'react';
import Login from './Pages/Login';
import User from './Pages/User';
import CreateLead from './Pages/CreateLead';
import AllUser from './Pages/AllUser.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
        <Routes>
        <Route path="/" element={<Login />} /> :
          <Route path="/Register" element={<Register />} />
          <Route path="/User-Management" element={<User />} />
          <Route path="/create-lead" element={<CreateLead />} />
          <Route path="/allusers" element={<AllUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
