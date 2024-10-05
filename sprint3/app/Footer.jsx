import Link from "next/link";
import styles from "../modules/Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© 2024 ITPowerBank. Todos los derechos reservados.</p>
            <nav>
                <ul>
                    <li>
                        <Link href="/politica-de-privacidad">
                            Política de Privacidad
                        </Link>
                    </li>
                    <li>
                        <Link href="/terminos-y-condiciones">
                            Términos y Condiciones
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacto">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;