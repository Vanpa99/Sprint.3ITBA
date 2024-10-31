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
      <Head>
        <title>Inicio - ITPOWERBANK</title>
        <meta
          name="description"
          content="Bienvenido a nuestra aplicación de ejemplo en Next.js."
        />
      </Head>
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
