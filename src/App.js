import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await Axios.get('http://localhost:8080/user');
      setData(res.data);
    } catch (error) {
      console.error('Error fetching data with Axios:', error);
    }
  };

  useEffect(() => {
    // Axios
    // getData();

    //Fetch API
    fetch('/user')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => console.error('Error fetching data with Fetch:', error));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map((user, index) => (
          <li key={index}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
