import { Axios } from "axios";
import { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";


function UserPage() {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)


    const fetchData = async (pageNumber = 1) => {
        try {
            const res = await Axios.get(`http://localhost:8080/test/user/?page={pageNumber}&limit=10`)
            setData(res.data.data)
            setPage(res.data.page)
            setTotalPage(res.data.pages)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData(page)
    }, [page])


    const handlerNextPage = () => {
        if (page < totalPage) {
        }
    }
    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }
    return (
        <Container>
            <h1>User Table</h1>
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
                    {data.map((user, index) => (
                        <tr key={index}>
                            <th scope="row">{(page - 1) * 10 + index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
                <span> Page {page} of {totalPages} </span>
                <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
            </div>
        </Container>
    )

}

export default UserPage