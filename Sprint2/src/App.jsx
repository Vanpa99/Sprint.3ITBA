import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Cuentas from "./components/Cuentas";
import Pagar from "./components/Pagar";
import Prestamos from "./components/Prestamos";
import Login from "./components/Login";
import styles from "./modules/App.module.css";
import "./Global.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <>
          <Header handleLogout={handleLogout} />
          <div className={styles.contenedor}>
            <Sidebar />
            <div className={styles.areaPrincipal}>
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/cuentas" element={<Cuentas />} />
                <Route path="/pagar" element={<Pagar />} />
                <Route path="/prestamos" element={<Prestamos />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </BrowserRouter>
  );
}

export default App;
