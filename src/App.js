import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './user.css';

import Header from './components/header'
import Footer from './components/footer'
import Login from './form/login'
import Signup from './form/signup'
import HomePage from './form/home'
import EditUserForm from './components/EditUserForm'
import AddUserForm from './components/AddUserForm';

function App() {
    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/user/edit/:userId" element={<EditUserForm />} />
                        <Route path="/user/add" element={<AddUserForm />} />
                        {/* <Route path="/admin" element={<Admin />} />
                        <Route path="/user/:id" element={<UserPage />} /> */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
