import './App.css'
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'

function App() {

  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <Navbar/>
          <div className='main-container'>
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
              <Route path='/item/:idItem' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
          </div>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App
