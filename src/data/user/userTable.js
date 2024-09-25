import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';


function UserTable() {
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [noResults, setNoResults] = useState(false)
    const navigate = useNavigate()


    useEffect(() => {
        fetch('/test/user')
            .then(response => response.json())
            .then(data => {
                setData(data)
                setFilteredData(data)
            })
            .catch(error => console.error('Error fetching data with Fetch:', error))
    }, [])

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchTerm === '') {
                setFilteredData(data)
                setNoResults(false)
            } else {
                const filtered = data.filter(user =>
                    user.email && user.email.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setFilteredData(filtered);
                setNoResults(filtered.length === 0)
            }
        }, 500)

        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm, data]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleEdit = (id) => {
        navigate(`/user/edit/${id}`);
    }

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            Axios.delete(`/test/user/${id}`)
                .then(response => {
                    setData(data.filter(user => user._id !== id))
                    setFilteredData(filteredData.filter(user => user._id !== id))
                })
                .catch(error => {
                    console.error('Error deleting user:', error);
                    alert('Failed to delete user')
                })
        }
    }
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
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
                        <button onClick={scrollToBottom} className="btn btn-primary m-2">Scroll to Bottom</button>
``
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
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((user, i) => (
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <div className="d-flex justify-content-end action-buttons">
                                        <Button 
                                            variant="outline-primary" 
                                            size="sm" 
                                            onClick={() => handleEdit(user._id)}
                                            className="mx-1"
                                        >
                                            Edit
                                        </Button>
                                        <Button 
                                            variant="outline-danger" 
                                            size="sm" 
                                            onClick={() => handleDelete(user._id)}
                                            className="mx-1"
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <div>
            <button onClick={scrollToTop} className="btn btn-primary m-2">Scroll to Top</button>
        </div>
        </Container>
        
    );
}

export default UserTable;
