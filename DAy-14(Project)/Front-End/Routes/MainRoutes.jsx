import React from 'react'
import AddMovie from '../src/Components/AddMovie'
import { Route, Routes } from 'react-router'
import HomePage from '../src/Components/HomePage'
const MainRoutes = () => {
  return (
    <>
     <Routes>
            <Route path='/' element={<AddMovie/>}></Route>
            <Route path='/allbooks' element={<HomePage/>}></Route>
        </Routes>
    </>
  )
}

export default MainRoutes