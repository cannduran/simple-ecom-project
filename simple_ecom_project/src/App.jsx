import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'

const App = () => {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App