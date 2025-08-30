import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop/Shop'
import Cart from './Pages/Cart'
import { ShopContextProvider } from './Context/shop-context'
const App = () => {
  return (
    <ShopContextProvider>
      <div>

        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

      </div>
    </ShopContextProvider>
  )
}

export default App