import React from 'react'
import  {Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Admin from '../Pages/Admin'
import Products from '../Pages/Products'
import IsAdmin from './IsAdmin'
import AddCategory from '../Pages/AddCategory'
import AddSubCategory from '../Pages/AddSubCategory'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sub-category' element={<AddSubCategory/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/admin' element={<IsAdmin><Admin/></IsAdmin>}/>
        <Route path='/addcategory' element={<AddCategory/>}/>
    </Routes>
  )
}

export default MainRoutes