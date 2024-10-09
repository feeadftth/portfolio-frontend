import { useState } from 'react'
import './App.css'
import { motion } from 'framer-motion'
import { Button } from './components/ui/button'
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Layout from './components/Layout'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<Home />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
