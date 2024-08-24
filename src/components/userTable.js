
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button, Container } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


function UserTable() {
    const [data, setData] = useState([])

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
   
    return (
        <Container>
            <h1>User table </h1>

        </Container>
    );
}

export default UserTable
