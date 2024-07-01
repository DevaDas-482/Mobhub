import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import Layout from './Layout'
import Mobile from './Mobile'
import Login from './Login'
import Register from './Register'

function MyRouter() {
  return (
   <BrowserRouter>
   
   <Routes>
   <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="mobile" element={<Mobile />} />
                <Route path="login" element={<Login />} />
                <Route path="Register" element={<Register />} />
               
            </Route>
    </Routes>

    </BrowserRouter>
  )
}

export default MyRouter