import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

function UserTable() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [noResults, setNoResults] = useState(false); 

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
                setNoResults(false);
            } else {
                const filtered = data.filter(user =>
                    user.email && user.email.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setFilteredData(filtered);
                setNoResults(filtered.length === 0);
            }
        }, 500);

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
            {noResults ? (
                <p>Không tìm thấy</p>
            ) : (
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
            )}
        </Container>
    );
}

export default UserTable;
