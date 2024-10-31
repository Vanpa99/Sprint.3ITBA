// app/login/page.js
"use client";
import React, { useState } from "react";
import Boton from "../reutilizables/Boton";
import InputField from "../Reutilizables/InputField.jsx";
import reut from "../../modules/Reut.module.css";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import SEO from "../components/SEO";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      router.push("/Inicio");
    } else {
      setErrorMessage("Nombre de usuario o contraseña incorrectos");
    }
  };

  return (
    <>
      <SEO
        title="Iniciar Sesión - ITPowerBank"
        description="Página de inicio de sesión para acceder a tu cuenta."
      />
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
                setUsername("");
                setPassword("");
                setErrorMessage("");
              }}
            />
          </div>
        </form>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
    </>
  );
}

export default Login;
