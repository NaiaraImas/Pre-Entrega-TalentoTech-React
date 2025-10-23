import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
import './home.css'

export default function Home(){
  return (
    <section className="home">
      <div className="hero">
        <h1>Bienvenido a la tienda de aventureros</h1>
        <p>Encuentra dados, manuales y todo lo necesario para tus partidas de Dungeons & Dragons.</p>
      </div>
      <h2>Productos destacados</h2>
      <ItemListContainer />
    </section>
  )
}
