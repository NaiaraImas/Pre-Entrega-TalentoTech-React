import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = localStorage.getItem("currentUser");
    if (loggedUser) navigate("/"); // si ya está logueado, lo manda al home
  }, []);

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/");
    } else {
      setError("Usuario o contraseña incorrectos.");
    }
  };

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.email === email);

    if (exists) {
      setError("Este usuario ya está registrado.");
    } else {
      const newUser = { email, password };
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      alert("Usuario registrado correctamente. Ahora podés iniciar sesión.");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <section style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Iniciar sesión</h2>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: "1rem", width: "100%" }}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginBottom: "1rem", width: "100%" }}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={handleLogin} style={{ marginRight: "1rem" }}>
        Iniciar sesión
      </button>
      <button onClick={handleRegister}>Registrarse</button>
    </section>
  );
}
