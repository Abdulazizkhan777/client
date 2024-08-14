import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
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
   <Route path='/register' element={<Signup/>}></Route>
   <Route path='/login' element={<Login/>}></Route>
   <Route path='/home' element={<Home/>}></Route>
   <Route path='/users' element={<Users/>}></Route>
   <Route path='/create' element={<Createuser/>}></Route>
   <Route path='/update/:id' element={<UpdateUser/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
