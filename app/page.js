import Image from "next/image";
import Link from 'next/link'


import CustomVideo from './customvideo.js'
import Partner from "./partners.js"
import Projects from "./projectsSlides.js"
import Slider from "./slider.js"
import Places from "./places.js"

import logo from "/public/img/logo.svg"


export default function Home() {
  return (
    <div>
      <header className="p-5 flex w-full bg-white justify-between">
        <Image
          src={logo}
          alt="NIC"
          width={150}
          height={150}
        />
        <div className="flex items-center gap-14 justify-center">
          <Link href="#about">Quem somos</Link>
          <Link href="#projects">Projetos</Link>
          <Link href="#partners">Parceiros</Link>
          <Link href="/dashboard">Transparência</Link>
          <Link href="/test">Notícias</Link>
        </div>
        <div className="flex items-center gap-10 justify-center">
          <Link href="/dashboard" className="rounded-full flex justify-center items-center w-40 h-10 bg-buttonColor text-white">Doe aqui!</Link>
        </div>
      </header>

      <main>
        <Slider className="w-full h-80" />

        <section>
          <div id="about" className="p-12 pt-36 flex justify-between">
            <div className="pr-12">
              <h1>Quem somos</h1>
              <h1 className="font-black text-5xl	max-w-xl py-3.5 2xl:text-7xl 2xl:max-w-4xl title">NIC - Núcleo de Incentivo à Cidadania</h1>
              <p className="text-sm font-medium max-w-lg 2xl:max-w-2xl	">Fundado em 2003, o NIC em Contagem, MG, é uma instituição sem fins lucrativos que promove atendimento social, cultural e educacional. A missão é garantir acesso às políticas públicas de proteção. O objetivo é melhorar a qualidade de vida e facilitar o acesso às políticas públicas. As atividades atendem crianças, adolescentes, jovens, idosos, mulheres e famílias da região do Ressaca, além de prestar assessoria técnica a entidades não governamentais.</p>
            </div>
            <CustomVideo />
          </div>



          <div id="projects" className="p-12">
            <div className="flex justify-between">
              <h1 className="pb-3.5">Nossos Projetos</h1>
              <Link className="pb-3.5" href="/projects">Ver mais</Link>
            </div>
            <div className="projects-gradient">
              <Projects />
            </div>
          </div>
          <div id="partners" className="p-12">
            <h1 className="pb-3.5">Nossos Parceiros</h1>
            <Partner />
          </div>
          <Places/>
        </section>
      </main>

    </div>
  );
}
