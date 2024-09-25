import React, { useState, useEffect, useRef } from "react";
import { Box, Container } from "@mui/system";

function ToDoList() {
  // Parse 'jobs' from localStorage, or initialize as an empty array if not found
  const storageList = JSON.parse(localStorage.getItem('jobs')) || [];

  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState(storageList);

  const inputRef = useRef();

  // Automatically focus on the input when the component loads
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Handle both button click and pressing 'Enter' key
  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job];

      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem('jobs', jsonJobs);

      return newJobs;
    });

    setJob('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          border: 0,
          borderColor: 'secondary.main',
          borderRadius: '16px',
          padding: 2,
          marginTop: 2,
        }}
      >
        <input 
          ref={inputRef}
          value={job}
          onChange={e => setJob(e.target.value)}
          onKeyDown={handleKeyDown} 
        />
        <button onClick={handleSubmit}>Add</button>

        <ul>
          {jobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
      </Box>
    </Container>
  );
}

export default ToDoList;
