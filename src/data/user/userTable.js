import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Container } from 'react-bootstrap';
import InputFocus from '../../components/InputFocus';

function UserTable() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('/test/user')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setFilteredData(data); 
            })
            .catch(error => console.error('Error fetching data with Fetch:', error));
    }, []);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchTerm === '') {
                setFilteredData(data); 
            } else {
                const filtered = data.filter(user =>
                    user.email && user.email.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setFilteredData(filtered);
            }
        }, 500); // Delay

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm, data]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <Container>
            <h1>User Table</h1>
            <input
                type="text"
                placeholder="Search by email..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="form-control mb-3"
            />
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
                    {filteredData.map((user, i) => (
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

export default UserTable;
