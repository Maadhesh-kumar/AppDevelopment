import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Login from './Component/Forms/Login'
import SignUp from './Component/Forms/SignUp'


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App