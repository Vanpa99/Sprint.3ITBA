import { Link } from "react-router-dom";
import styles from "../modules/Sidebar.module.css";

function Sidebar() {
    return (
        <aside className={styles.contNav}>
          <nav>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/cuentas">Cuentas</Link>
              </li>
              <li>
                <Link to="/pagar">Pagar</Link>
              </li>
              <li>
                <Link to="/prestamos">Préstamos</Link>
              </li>
            </ul>
          </nav>
        </aside>
      );
}

export default Sidebar;