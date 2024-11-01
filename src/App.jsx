import { useState } from 'react'
import './App.css'
import { motion } from 'framer-motion'
import { Button } from './components/ui/button'
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Layout from './components/Layout'
import Landing from './components/Landing'
import Contacts from './components/Contacts'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route element={<Layout />}>
          <Route path='home' element={<Home />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='skills' element={<Skills />} />
          <Route path='projects' element={<Projects />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
