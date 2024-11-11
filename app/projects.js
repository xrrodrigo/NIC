import Image from "next/image";
import Link from 'next/link'

import Coral from "/public/img/coral.jpg"

export default function projects() {
    
    return (
        
        <div className="flex">
            <div className="absolute z-10 text-white pl-4">
                
                <div className="pb-11 pt-4 text-left">
                <h1 className="font-extrabold text-3xl leading-9 pb-3">Coral<br/>Vozes de águia</h1>
                <h2 className="font-light text-xs max-w-68">O projeto NIC reúne idosos para se apresentarem em escolas, palestras e praças de Contagem, espalhando alegria.</h2>
                </div>
                <Link href="#" className="bg-white text-xl text-primaryColor flex w-44 h-16 items-center justify-center rounded-xl">Saiba Mais</Link>
            </div>

            <Image
                className="w-80 h-80 rounded-2xl brightness-50"
                src={Coral}
                alt="Coral Vozes de águia"
            />
        </div>

    )
}