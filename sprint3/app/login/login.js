"use client"
import React, { useState, useEffect } from "react";
import Boton from "../reutilizables/Boton";
import InputField from "../Reutilizables/InputField.jsx";
import reut from "../modules/Reut.module.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verificar si ya hay una sesión activa en localStorage cuando el componente se monta
  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Lista de usuarios
  const users = [
    { username: "ITPOWERBANK", password: "2024" },
    { username: "USUARIO1", password: "1234" },
  ];

  // Verificar si ya hay una sesión activa en localStorage cuando el componente se monta
  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
// eliminé onlogin();
    }
  }, [onLogin]);

  const handleLogin = (e) => {
    e.preventDefault();
    const userExists = users.some(
      (user) => user.username === username && user.password === password
    );
    if (userExists) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true"); // Guardar la sesión en localStorage
       // Eliminé Onlogin();
    } else {
      setErrorMessage("Nombre de usuario o contraseña incorrectos");
    }
  };

  return (
    <div className={reut.formContainer}>
      <h2 className={reut.sectionTitle}>Iniciar Sesión</h2>
      <form onSubmit={handleLogin} autoComplete="off">
        <InputField
          label="Usuario:"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Ingresa tu nombre de usuario"
          required
          autoComplete="off"
        />
        <InputField
          label="Contraseña:"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingresa tu contraseña"
          required
          autoComplete="off"
        />
        <div className={reut.btnContainer}>
          <Boton type="submit" text="Iniciar Sesión" />
          <Boton
            type="button"
            text="Limpiar"
            action="clear"
            onClick={() => {
              setUsername(""), setPassword(""), setErrorMessage("");
            }}
          />
        </div>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}

export default Login;
