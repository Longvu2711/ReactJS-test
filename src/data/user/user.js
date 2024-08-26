
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button, Container } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


function User() {
    const reloadPage = () => {
        window.location.reload();
    }
    const [data, setData] = useState([])
    const [showPasswords, setShowPasswords] = useState({})


    const getData = async () => {
        try {
            const res = await Axios.get('http://localhost:8080/test/user')
            setData(res.data)
        } catch (error) {
            console.error('Error fetching data with Axios:', error)
        }
    }


    useEffect(() => {
        // Axios
        // getData();

        // Using Fetch API
        fetch('/test/user')
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
            .catch(error => console.error('Error fetching data with Fetch:', error))
    }, [])
    const toggleShowPassword = (index) => {
        setShowPasswords((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }))
    }


    return (
        <Container>
            <h1>User </h1>
            <Button variant="outline-info" onClick={reloadPage}>Reload</Button>
            <Button variant="outline-primary">Add user</Button>

            <ul className="userlist">
                {data.map((user, i) => (
                    <li className='userinfo' key={i}>
                        <div><strong>Name </strong> : {user.name}</div>
                        <div><strong>Email</strong> : {user.email}</div>
                        <div>
                            <strong>Pass</strong> : {showPasswords[i] ? user.password : '••••••••'}
                            <span
                                onClick={() => toggleShowPassword(i)}
                                style={{ marginLeft: '10px', cursor: 'pointer' }}
                            >
                                {showPasswords[i] ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>                        <div><strong>Phone</strong> : {user.phonenumber}</div>
                        <div><strong>Role </strong> : {user.role}</div>
                        <div><strong>Age</strong> : {user.age}</div>
                        <div><strong>Sex</strong> : {user.sex}</div>
                    </li>
                ))}
            </ul>
        </Container>
    );
}

export default User
