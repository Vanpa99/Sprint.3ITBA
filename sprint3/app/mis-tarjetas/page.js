// app/cards/page.js - Ruta estática
import CreditCard from "../components/CreditCard/CreditCard";
export default function CardsPage() {
  return (
    <div>
      <h1>Nuestras Tarjetas</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <CreditCard
          type="default"
          cardNumber="4111111111111111"
          cardHolder="PABLO GODOY"
          expiryDate="12/25"
        />
        <CreditCard
          type="gold"
          cardNumber="5555555555554444"
          cardHolder="MATIAS VAN PAMELEN"
          expiryDate="03/26"
        />
      </div>
    </div>
  );
}
