import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartWidget() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  // Calcular total de productos (sumando cantidades)
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Si no hay productos, no mostramos nada
  if (totalItems === 0) return null;

  return (
    <div
      onClick={() => navigate("/carrito")}
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        background: "#000",
        color: "#f5c74a",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.5rem",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
      title="Ir al carrito"
    >
      🛒
      <span
        style={{
          position: "absolute",
          top: "6px",
          right: "6px",
          background: "#e2b84b",
          color: "#000",
          borderRadius: "50%",
          width: "22px",
          height: "22px",
          fontSize: "0.8rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          border: "1px solid #000",
        }}
      >
        {totalItems}
      </span>
    </div>
  );
}

