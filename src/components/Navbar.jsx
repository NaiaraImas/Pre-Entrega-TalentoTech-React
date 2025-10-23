import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar(){
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand">Tai's D&D Shop</Link>
        <div className="links">
          <Link to="/productos">Productos</Link>
          <Link to="/carrito">Carrito</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
      </div>
    </nav>
  )
}
