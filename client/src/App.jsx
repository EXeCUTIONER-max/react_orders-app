import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Orders from './Orders'
import CreateOrder from './CreateOrder'
import UpdateOrder from './UpdateOrder'

function App() {

  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Orders />}></Route>
      <Route path='/create' element={<CreateOrder />}></Route>
      <Route path='/update/:id' element={<UpdateOrder />}></Route>
    </Routes>
    </BrowserRouter>
  </div>
    )
}

export default App
