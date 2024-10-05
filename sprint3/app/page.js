import { Moneda } from "./reutilizables/Api";

function Inicio() {
  return (
    <section>
      <div>
        <section>
          <h2>Bienvenido a ITPowerBank</h2>
          <p>
            ITPowerBank es su aliado financiero de confianza. Ofrecemos
            soluciones bancarias modernas, seguras y eficientes para todas sus
            necesidades.
          </p>
        </section>
      </div>
      <Moneda/>
    </section>
  );
}

export default Inicio;
