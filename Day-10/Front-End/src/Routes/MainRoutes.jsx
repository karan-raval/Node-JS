import React from 'react'
import { Route, Routes } from 'react-router'
import Allbooks from '../Components/Allbooks'
import Addbooks from '../Components/Addbooks'
const MainRoutes = () => {
  return (
    
        <Routes>
            <Route path='/' element={<Addbooks/>}></Route>
            <Route path='/allbooks' element={<Allbooks/>}></Route>
        </Routes>

)
}

export default MainRoutes