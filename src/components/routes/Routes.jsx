import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../auth/Login'
import SignUp from '../auth/SignUp'
import Taskmanagement from '../Taskmanagement'

const RouteComponent = () => {
     return (
          <BrowserRouter>
               <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/taskmanagement' element={<Taskmanagement />} />
               </Routes>
          </BrowserRouter>
     )
}

export default RouteComponent