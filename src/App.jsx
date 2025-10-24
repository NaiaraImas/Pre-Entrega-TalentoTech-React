import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Productos from './pages/Productos'
import ProductDetail from './pages/ProductDetail'
import Carrito from './pages/Carrito'
import Contacto from './pages/Contacto'
import Login from "./pages/Login"
import CartWidget from "./components/CartWidget";

export default function App(){
  return (
    <>
      <Navbar />
      <main className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
       <CartWidget />
    </>
  )
}
