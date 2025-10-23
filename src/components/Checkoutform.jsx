import React, { useState } from "react";

export default function CheckoutForm({ onClose, onConfirm }) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    direccion: "",
    metodoPago: "tarjeta",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(formData);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fffbea",
          padding: "2rem",
          borderRadius: "10px",
          width: "90%",
          maxWidth: "400px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        }}
      >
        <h3 style={{ marginTop: 0, color: "#222" }}>🪄 Finalizar compra</h3>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          <input
            name="nombre"
            placeholder="Nombre completo"
            value={formData.nombre}
            onChange={handleChange}
            required
            style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <input
            name="email"
            type="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <input
            name="direccion"
            placeholder="Dirección"
            value={formData.direccion}
            onChange={handleChange}
            required
            style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }}
          />

          <select
            name="metodoPago"
            value={formData.metodoPago}
            onChange={handleChange}
            style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }}
          >
            <option value="tarjeta">Tarjeta de crédito</option>
            <option value="debito">Tarjeta de débito</option>
            <option value="transferencia">Transferencia bancaria</option>
          </select>

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                background: "#444",
                color: "white",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Cancelar
            </button>

            <button
              type="submit"
              style={{
                background: "#e2b84b",
                color: "black",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Confirmar compra
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
