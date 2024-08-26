import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8080/test/login', { email, password })
            localStorage.setItem('token', res.data.token)
            alert('Login successful!')
        } catch (err) {
            alert('Login failed!')
            console.log({message: err.message})
        }
    }

    const goToSignup = () => {
        navigate('/signup')
    }

    return (
        <form onSubmit={handleLogin} className="container mt-5">
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
            <button type="submit"  className="btn btn-primary mt-3">Login</button>
            <button type="button" className="btn btn-secondary mt-3 ml-2" onClick={goToSignup}>Sign Up</button>
        </form>
    )
}

export default Login 
