import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../pages/Home'
import Products from '../pages/Products'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import FouOFour from '../pages/FouOFour'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/Products" element={<Products/>}></Route>
            <Route path="/Signup" element={<Signup/>}></Route>
            <Route path="*" element={<FouOFour/>}></Route>
        </Routes>
    </div>
  )
}

export default Allroutes