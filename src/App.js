import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

function App() {
  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const res = await Axios.get('http://localhost:8080/user')
      setData(res.data)
    } catch (error) {
      console.error('Error fetching data with Axios:', error)
    }
  };

  useEffect(() => {
    // Axios
    // getData();

    // Using Fetch API
    fetch('/user')
      .then(response => response.json())
      .then(data => {
        setData(data)
      })
      .catch(error => console.error('Error fetching data with Fetch:', error))
  }, [])
  const reloadPage = () => {
    window.location.reload(); // Tải lại trang
  };

  return (
    <div>
      <h1>  Users</h1>
      <button type="button" class="btn btn-outline-info" onClick={reloadPage}>Reload</button>
      <button type="button" class="btn btn-outline-primary" >Add user </button>
      {/* <button type="button" class="btn btn-outline-danger" >Delete</button> */}


      <ul className="userlist">
        {data.map((user, i) => (
          <li className='userinfo' key={i}>
            <div><strong>Name </strong> : {user.name}</div>
            <div><strong>Email</strong> : {user.email}</div>
            <div><strong>Phone</strong> : {user.phonenumber}</div>
            <div><strong>Role </strong> : {user.role}</div>
            <div><strong>Age</strong> : {user.age}</div>
            <div><strong>Sex</strong> : {user.sex}</div>
          </li>
        ))}
      </ul>
    </div>
    
  )
}


export default App;
