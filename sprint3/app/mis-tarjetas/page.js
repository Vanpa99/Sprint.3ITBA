import Link from "next/link";
import CreditCard from "../components/CreditCard/CreditCard";
import SEO from "../components/SEO";

export default function CardsPage() {
  return (
    <>
      <SEO title="Mis Tarjetas - ITPowerBank" description="Nuestras Tarjetas" />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Nuestras Tarjetas</h1>
        <div className="flex flex-wrap gap-6">
          <Link href={`/mis-tarjetas/4111111111111111`}>
            <div className="cursor-pointer transition-transform hover:scale-105">
              <CreditCard
                type="default"
                cardNumber="4111111111111111"
                cardHolder="PABLO GODOY"
                expiryDate="12/25"
              />
            </div>
          </Link>

          <Link href={`/mis-tarjetas/5555555555554444`}>
            <div className="cursor-pointer transition-transform hover:scale-105">
              <CreditCard
                type="gold"
                cardNumber="5555555555554444"
                cardHolder="MATIAS VAN PAMELEN"
                expiryDate="03/26"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
