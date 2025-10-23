import React from "react";
import { useCart } from "../context/CartContext";

export default function ItemCard({ item }) {
  const { addToCart } = useCart();

  return (
    <div className="item-card">
      <img src={item.img} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <p className="price">${item.precio.toLocaleString()}</p>
      <div className="actions">
        <button onClick={() => addToCart(item)}>Agregar al carrito</button>
      </div>
    </div>
  );
}
