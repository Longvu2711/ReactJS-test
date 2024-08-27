import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';



const Signup = () => {
    const [email, setEmail] = useState('')  
    const [password, setPassword] = useState('')  
    const [role, setRole] = useState('user')
    const navigate = useNavigate()  
       

    const handleSignup = async (e) => {
        e.preventDefault()  
        try {
            const res = await axios.post('http://localhost:8080/test/signup', { email, password, role })  
            localStorage.setItem('token', res.data.token)  
            alert('Signup successful!') 
            res.status(200).json({email:'Signed'}) 
        } catch (err) {
            alert('Signup failed!')  
            console.log({message: err.message})
        }
    }
    const toLogin = () => {
        navigate('/login')   
    }  

    return (
        <form onSubmit={handleSignup} className="container mt-5">
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
                type="email" 
                className="form-control" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input 
                type="password" 
                className="form-control" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
            />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Sign Up</button>
        <button type="button" className="btn btn-secondary mt-3 ml-2" onClick={toLogin}>Login</button>
    </form>
    )  
}  

export default Signup  
