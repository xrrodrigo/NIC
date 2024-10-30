import Image from "next/image";
import Link from 'next/link'

import Slider from './slider.js'
import CustomVideo from './customvideo.js'


import logo from "/public/img/logo.svg"
import Car1 from "/public/img/car1.png"
import Car2 from "/public/img/car2.png"
import Car3 from "/public/img/car3.png"
import partner from "/public/img/bauduco4.png";

 

export default function Home() {
  return (
    <div>
    <header className="p-5 flex justify-between">
    <Image
      src={logo}
      alt="NIC"
       width={150}
       height={150}
      />
      <div className="flex items-center gap-14 justify-center">
      <Link href="#about">Quem somos</Link>
      <Link href="/dashboard">Projetos</Link>
      <Link href="/dashboard">Parceiros</Link>
      <Link href="/dashboard">Transparência</Link>
      </div>
      <div className="flex items-center gap-10 justify-center">
      <Link href="/dashboard" className="rounded-full flex justify-center items-center w-40 h-10 bg-buttonColor text-white">Doe aqui!</Link>
      <Link href="/test">Entrar</Link>
      </div>
      </header> 
      <main>
<Slider></Slider>
 

 <div className="p-12 pt-36 flex justify-between">
  <div id="about" className="pr-12">
 <h1>Quem somos</h1>
 <h1 className="font-black text-5xl	max-w-xl py-3.5">NIC - Núcleo de Incentivo à Cidadania</h1>
 <p className="text-sm font-medium max-w-lg">Fundado em 2003, o NIC em Contagem, MG, é uma instituição sem fins lucrativos que promove atendimento social, cultural e educacional. A missão é garantir acesso às políticas públicas de proteção. O objetivo é melhorar a qualidade de vida e facilitar o acesso às políticas públicas. As atividades atendem crianças, adolescentes, jovens, idosos, mulheres e famílias da região do Ressaca, além de prestar assessoria técnica a entidades não governamentais.</p>
 </div>
<CustomVideo/>
    </div>

 <div id="partners" className="p-12 pt-24">
 <h1>Nossos Parceiros</h1>
 <div className="flex">
 <Image
 src={partner}
  width={250}
   height={250} 
   alt=""
   />

</div>
</div>
       </main>

      
    </div>
  );
}
