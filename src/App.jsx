import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout'
import HomePage from './Pages/HomePage/HomePage'
import Cart from './Pages/Cart/Cart'
import './App.css'

function App() {

//  const itemsCount = [productCount, setProductCount] = useState(0);
//   productCount = props.HomePage[itemsExist];


  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
