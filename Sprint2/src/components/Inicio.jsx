import { Moneda }  from "./Reutilizables/Api";
import reut from "../modules/Reut.module.css";


function Inicio() {
  return (
    <section>
      <div className={reut.contPrincipal}>
        <section className={reut.inicioDescripcion}>
          <h2 className={reut.sectionTitle}>Bienvenido a ITPowerBank</h2>
          <p className={reut.sectionText}>
            ITPowerBank es su aliado financiero de confianza. Ofrecemos
            soluciones bancarias modernas, seguras y eficientes para todas sus
            necesidades.
          </p>
        </section>
      </div>

      <Moneda />
    </section>
  );
}

export default Inicio;
