import React from 'react'
import  {Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Admin from '../Pages/Admin'
import Products from '../Pages/Products'
import IsAdmin from './IsAdmin'
import AddCategort from '../Pages/AddCategort'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/admin' element={<IsAdmin><Admin/></IsAdmin>}/>
        <Route path='/addcategory' element={<IsAdmin><AddCategort/></IsAdmin>}/>
    </Routes>
  )
}

export default MainRoutes