
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
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, i) => (
                        <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </Container>
    );
}

export default UserTable
