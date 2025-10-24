import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import productosDND from "../data/productos";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        await fetch("https://fakestoreapi.com/products");
        setProductos(productosDND);
      } catch (err) {
        setError("Error al conectar con la API");
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Cargando productos...</p>;
  if (error) return <p style={{ color: "red", textAlign: "center" }}>Error: {error}</p>;

  return (
    <section style={{ padding: "2rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          marginTop: "1rem",
        }}
      >
        {productos.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
