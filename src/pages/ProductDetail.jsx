import React from "react";
import { useParams, Link } from "react-router-dom";
import productosDND from "../data/productos";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Buscar producto por ID
  const producto = productosDND.find((p) => p.id === parseInt(id));

  if (!producto) {
    return (
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Producto no encontrado</h2>
        <Link
          to="/"
          style={{
            color: "#e2b84b",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Volver al inicio
        </Link>
      </section>
    );
  }

  return (
    <section
      style={{
        padding: "2rem",
        maxWidth: "700px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <img
        src={producto.img}
        alt={producto.nombre}
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "contain",
          marginBottom: "1rem",
        }}
      />
      <h2>{producto.nombre}</h2>
      <p style={{ fontSize: "1.1rem", margin: "1rem 0" }}>
        ¡Los mejores accesorios para tus aventuras de D&D!
      </p>
      <h3 style={{ color: "#333" }}>${producto.precio.toLocaleString()}</h3>

      <div style={{ marginTop: "1.5rem" }}>
        <button
          onClick={() => addToCart(producto)}
          style={{
            background: "#e2b84b",
            color: "black",
            border: "none",
            padding: "0.6rem 1.2rem",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Agregar al carrito
        </button>

        <Link
          to="/"
          style={{
            display: "inline-block",
            marginLeft: "1rem",
            textDecoration: "none",
            color: "#000",
            background: "#ddd",
            padding: "0.6rem 1.2rem",
            borderRadius: "6px",
          }}
        >
          Volver
        </Link>
      </div>
    </section>
  );
}
