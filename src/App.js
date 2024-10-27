import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'

import { Route,Routes } from 'react-router-dom';
import NavBar from './Components/NavBar'

import AboutMe from './page/AboutMe';
import Home from './page/Home';
import Skills from './page/Skills';
import Projects from './page/Projects';

const App = () => {

  return (
    <>
      <NavBar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutme' element={<AboutMe/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
