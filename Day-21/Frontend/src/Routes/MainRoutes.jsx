import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Signup from '../Components/Signup'
import Login from '../Components/Login'

const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default MainRoutes