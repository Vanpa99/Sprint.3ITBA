import "./Global.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../modules/App.module.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header></Header>
        <div className={styles.contenedor}>
          <Sidebar></Sidebar>
          <div className={styles.areaPrincipal}>{children}</div>
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
