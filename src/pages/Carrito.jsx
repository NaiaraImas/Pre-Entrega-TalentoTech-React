import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import CheckoutForm from "../components/Checkoutform";

export default function Carrito() {
  const { cartItems, addToCart, removeItem, clearCart } = useCart();
  const [showForm, setShowForm] = useState(false);

  const total = cartItems.reduce(
    (acc, item) => acc + item.precio * (item.quantity || 1),
    0
  );

  const handleConfirm = (data) => {
    alert(
      `¡Gracias por tu compra, ${data.nombre}! 🧙‍♂️\nTe enviamos un comprobante a ${data.email}.`
    );
    clearCart();
    setShowForm(false);
  };

  if (cartItems.length === 0) {
    return (
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Tu carrito está vacío 🛒</h2>
        <p>Agregá algunos productos para comenzar tu aventura.</p>
      </section>
    );
  }

  return (
    <section style={{ padding: "2rem" }}>
      <h2>Tu carrito 🛒</h2>

      <div style={{ marginTop: "1rem" }}>
        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #ddd",
              padding: "1rem 0",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <img
                src={item.img}
                alt={item.nombre}
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <div>
                <h4 style={{ margin: 0 }}>{item.nombre}</h4>
                <p style={{ margin: 0 }}>
                  Precio: ${item.precio.toLocaleString()}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginTop: "0.3rem",
                  }}
                >
                  <button
                    onClick={() => removeItem(item.id)}
                    style={{
                      background: "#9fa75dff",
                      color: "white",
                      border: "none",
                      padding: "0.3rem 0.6rem",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "1rem",
                    }}
                  >
                    ➖
                  </button>

                  <span style={{ fontWeight: "bold" }}>{item.quantity}</span>

                  <button
                    onClick={() => addToCart(item)}
                    style={{
                      background: "#cbd851ff",
                      color: "white",
                      border: "none",
                      padding: "0.3rem 0.6rem",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "1rem",
                    }}
                  >
                    ➕
                  </button>
                </div>
              </div>
            </div>

            <div>
              <p style={{ fontWeight: "bold" }}>
                Subtotal: ${(item.precio * (item.quantity || 1)).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Total: ${total.toLocaleString()}</h3>

        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            onClick={clearCart}
            style={{
              background: "#444",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Vaciar carrito
          </button>

          <button
            style={{
              background: "#e2b84b",
              color: "black",
              border: "none",
              padding: "0.5rem 1.2rem",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => setShowForm(true)}
          >
            Finalizar compra
          </button>
        </div>
      </div>

      {showForm && (
        <CheckoutForm
          onClose={() => setShowForm(false)}
          onConfirm={handleConfirm}
        />
      )}
    </section>
  );
}

