import Image from "next/image";
import Link from 'next/link'

import Coral from "/public/img/coral.jpg"

import './globals.css';


export default function projects() {
    
    return (
        <div className="flex flex-col w-96 h-card border rounded-md">
       <Image
       src={Coral}
       className="w-full max-h-48"
       alt="Coral"
       />
       <div className="info-format">
       <div className="flex flex-col text-left p-4">    
       <div className="flex items-center text-left justify-between">
        <h1 className="text-project-title font-medium">Vozes <br/>de águia</h1>
        <h2 className="text-base font-medium detail-color">Quarta<br/> Sexta</h2>
       </div>
       <h2 className="text-unit thirt-color pt-3">NIC - Unidade Quinquim</h2>
        </div>  
        <div className="learn-more pl-4 pr-4 learn-more">
            <h2 className="text-sm">Novo Progresso</h2>
            <Link href="#" className="about rounded-md">Saiba-Mais</Link>
       </div>
        </div>
        </div>

    )
}