import { Link } from "react-router-dom";
import styles from "../modules/Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© 2024 ITPowerBank. Todos los derechos reservados.</p>
            <nav>
                <ul>
                    <li>
                        <Link to="#">Política de Privacidad</Link>
                    </li>
                    <li>
                        <Link to="#">Términos y Condiciones</Link>
                    </li>
                    <li>
                        <Link to="#">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;