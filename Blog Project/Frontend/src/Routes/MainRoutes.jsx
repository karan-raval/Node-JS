import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import CreateBlog from '../Pages/CreateBlog'
import SingleBlog from '../Pages/SingleBlog'
import PrivateRoute from '../Pages/PrivateRoute'

const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/aboutus' element={<PrivateRoute><About/></PrivateRoute>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/createblog' element={<CreateBlog/>}></Route>
        <Route path='/allblogs/:id' element={<SingleBlog/>}></Route>
    </Routes>
    </>
  )
}

export default MainRoutes