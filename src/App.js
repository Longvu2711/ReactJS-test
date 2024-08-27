import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './user.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import Header from './components/header'
import Container from 'react-bootstrap/Container';
import User from './data/user/user'
import InputFocus from './components/InputFocus'
import UserTable from './data/user/userTable'
import Footer from './components/footer'
import Login from './form/login'
import Signup from './form/signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './form/home'



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;