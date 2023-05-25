import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login"element={user ? <Navigate to="/" /> : <Login />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
