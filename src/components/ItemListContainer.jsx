import React, { useState } from 'react'
import ItemCard from './ItemCard'
import productos from '../data/productos'

export default function ItemListContainer(){
  const [cart, setCart] = useState([])

  function handleAdd(item){
    setCart(prev => [...prev, item])
    alert(item.nombre + ' agregado al carrito')
  }

  return (
    <div className="items-grid">
      {productos.map(p => (
        <ItemCard key={p.id} item={p} onAdd={handleAdd} />
      ))}
    </div>
  )
}
