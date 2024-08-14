import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import Users from './Users'
import Createuser from './CreateUser'
import UpdateUser from './UpdateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/create' element={<Createuser />} />
        <Route path='/update/:id' element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
