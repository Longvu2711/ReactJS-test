import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './user.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import Header from './components/header'
import Container from 'react-bootstrap/Container';
import User from './components/user'
import InputFocus from './components/InputFocus'

function App() {

  return (
    <Container>
      <div className='app-container'>
        <Header />
        <InputFocus/>
        <User />
      </div>
    </Container>
  );
}

export default App;