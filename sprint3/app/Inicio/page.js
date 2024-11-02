// app/Inicio/page.js
"use client";
import reut from "../../modules/Reut.module.css";
import { Moneda } from "../reutilizables/Api";


function Inicio() {
  return (
    <>
     {/*  <SEO
        title="Inicio - ITPowerBank"
        description="Bienvenido a ITPowerBank, su aliado financiero de confianza."
      /> */}
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
    </>
  );
}

export default Inicio;
