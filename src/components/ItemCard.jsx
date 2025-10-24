import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function ItemCard({ item }) {
  const { addToCart } = useCart();

  return (
    <div
      className="item-card"
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <Link
        to={`/producto/${item.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          src={item.img}
          alt={item.nombre}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <h3>{item.nombre}</h3>
      </Link>
      <p className="price">${item.precio.toLocaleString()}</p>
      <button
        onClick={() => addToCart(item)}
        style={{
          background: "#e2b84b",
          color: "black",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
