import Link from "next/link";
import styles from "../modules/Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.contNav}>
      <nav>
        <ul>
          <li>
            <Link href="/Inicio">Inicio</Link>
          </li>
          <li>
            <Link href="/cuentas">Cuentas</Link>
          </li>
          <li>
            <Link href="/pagar">Pagar</Link>
          </li>
          <li>
            <Link href="/prestamos">Préstamos</Link>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
          <li>
            <Link href="/mis-tarjetas">Mis Tarjetas</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
