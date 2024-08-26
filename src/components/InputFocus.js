import { useEffect, useRef, useState } from "react"


const InputFocus = () => {
    const [data, setData] = useState([])

    const inputRef = useRef()

    useEffect(() => inputRef.current.focus(), [])

    const handlerAdd = (e) => {
        if (e.key === 'Enter') {
            setData([ e.target.value,...data])
            e.target.value = ''
        }
    }
    const deleteList = () => {
        setData([])
    }

    return (
        <div className="border border-2 border-gray-800 rounded p-3 w-100">
            <input
                ref={inputRef}
                onKeyDown={handlerAdd}
                type="text"
                placeholder="Note"
                className="form-control w-100 mb-3" 
            />
            <ul className="list-group list-disc pl-4">
                {data.map((item, index) => (
                    <li key={-index} className="list-group-item">
                        {item}
                    </li>
                ))}
            </ul>
          
        </div>

    )
}

export default InputFocus