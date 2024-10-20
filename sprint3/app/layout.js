// app/layout.js
"use client";
import "./Global.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../modules/App.module.css";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Login from "./login/page";

function AuthenticatedLayout({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <>
      <Header />
      <div className={styles.contenedor}>
        <Sidebar />
        <div className={styles.areaPrincipal}>{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AuthProvider>
          <AuthenticatedLayout>{children}</AuthenticatedLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
