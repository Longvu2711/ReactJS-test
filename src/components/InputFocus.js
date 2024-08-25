import { useEffect, useRef, useState } from "react"


const InputFocus = () => {
    const [data, setData] = useState([])

    const inputRef = useRef()

    useEffect(() => inputRef.current.focus(), [])

    const handlerAdd = (e) => {
        if (e.key === 'Enter') {
            setData([...data, e.target.value])
            e.target.value = ''
        }
    }
    const deleteList = () => {
        setData([])
    }

    return (
        <div className="border border-2 border-gray-800 rounded p-3">
            <input
                ref={inputRef}
                onKeyDown={handlerAdd}
                type="text"
                placeholder="Type something"
                className="form-control w-100 mb-3" // sử dụng 'form-control' để áp dụng kiểu Bootstrap cho input
            />
            <ul className="list-group list-disc pl-4">
                {data.map((item, index) => (
                    <li key={index} className="list-group-item">
                        {item}
                    </li>
                ))}
            </ul>
            {/* <div className="d-flex justify-content-end mb-3">
                <button onClick={deleteList} className="btn btn-danger">Delete All</button>
            </div> */}
        </div>

    )
}

export default InputFocus