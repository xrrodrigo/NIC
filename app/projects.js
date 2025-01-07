import Image from "next/image";
import Link from "next/link";

import Coral from "/public/img/coral.jpg";

import "./globals.css";

export default function projects({
  name,
  firstDay,
  secondDay,
  unity,
  neighborhood,
}) {
  function Choir() {
    const data = {
      name: "Vozes de águia",
      firstDay: "Quarta",
      secondDay: "Sexta",
      unity: "Quinquim do Mandú",
      neighborhood: "Novo Progresso",
    };
  }
  return (
    <div className="flex flex-col w-96 h-card border rounded-lg">
      <Image src={Coral} className="w-full max-h-48 rounded-t-lg" alt="Coral" />
      <div className="info-format">
        <div className="flex flex-col text-left p-4">
          <div className="flex items-center text-left justify-between">
            <h1 className="text-project-title font-medium">{name}</h1>
            <h2 className="text-sm font-medium detail-color">
              {firstDay}
              <br />
              {secondDay}
            </h2>
          </div>
          <h2 className="text-unit thirt-color pt-3">NIC - {unity}</h2>
        </div>
        <div className="learn-more pl-4 pr-4 learn-more">
          <h2 className="text-sm">{neighborhood}</h2>
          <Link href="#" className="about rounded-md font-medium">
            Saiba-Mais
          </Link>
        </div>
      </div>
    </div>
  );
}
