import Image from "next/image";
import Link from 'next/link'


import CustomVideo from './customvideo.js'
import Partner from "./partners.js"
import Projects from "./projectsSlides.js"
import Slider from "./slider.js"
import Places from "./places.js"
import SocialAssistance from "./socialassistance.js"
import News from "./comunicse.js"
import Testimonials from "./testimonials.js"


import logo from "/public/img/logo.svg"
import volunteer from "/public/img/volunteer.webp"


export default function Home() {
  return (
    <div>
      <header className="p-5 flex w-full h-20 bg-white justify-between fixed z-50">
        <Image
          src={logo}
          alt="NIC"
          width={150}
          height={150}
        />
        <div className="flex items-center gap-14 justify-center">
          <Link href="#about">Quem somos</Link>
          <Link href="#projects">Projetos</Link>
          <Link href="#contact">Contatos</Link>
          <Link href="/dashboard">Transparência</Link>
          <Link href="#news">Notícias</Link>
        </div>
        <div className="flex items-center gap-10 justify-center">
          <Link href="/dashboard" className="rounded-full flex justify-center items-center w-40 h-10 bg-buttonColor text-white">Doe aqui!</Link>
        </div>
      </header>

      <main className="pt-20">

        <section>
        <Slider className="w-full h-80"/>
          <div id="about" className="p-12 h-lg flex items-center justify-between">
            <div className="pr-12">
              <h1>Quem somos</h1>
              <h1 className="font-black text-5xl	max-w-xl py-3.5 2xl:text-7xl 2xl:max-w-4xl title">NIC - Núcleo de Incentivo à Cidadania</h1>
              <p className="text-sm font-medium max-w-lg 2xl:max-w-2xl	">Fundado em 2003, o NIC em Contagem, MG, é uma instituição sem fins lucrativos que promove atendimento social, cultural e educacional. A missão é garantir acesso às políticas públicas de proteção. O objetivo é melhorar a qualidade de vida e facilitar o acesso às políticas públicas. As atividades atendem crianças, adolescentes, jovens, idosos, mulheres e famílias da região do Ressaca, além de prestar assessoria técnica a entidades não governamentais.</p>
            </div>
            <CustomVideo />
          </div>
          
          <SocialAssistance/>

          <div id="projects" className="p-12 ">
            <div className="flex justify-between">
              <h1 className="pb-3.5">Nossos Projetos</h1>
              <Link className="pb-3.5" href="/projects">Ver mais</Link>
            </div>
            <div className="projects-gradient">
              <Projects />
            </div>
          </div>

          <div className="w-full justify-center items-center h-72 flex text-white">
            <div className="flex text-center items-center z-20 absolute flex-col">
            <h1 className="font-extrabold text-5xl">Quer ajudar mas não sabe como<r className="text-thirtColor">?</r></h1>
            <span className="text-2xl font-normal	pb-8">Preencha o formulário abaixo e se inscreva como voluntario</span>
            <Link className="bg-thirtColor flex w-44 h-12 flex justify-center items-center rounded-md" href="https://forms.gle/ULN3fxJd8n6qjd2g6">Cadastre-se Aqui!</Link>
            </div>
            <div className="bg-orangeColor w-full h-72 absolute opacity-70"></div>
         <Image
         className="object-cover w-full h-72"
         src={volunteer}
         alt="Voluntários"
         />
          </div>

<News/>
<Testimonials/>


          <div id="partners">
            <div className="pl-12">
            <h1 className="pb-3.5">Nossos Parceiros</h1>
            </div>
            <Partner/>
          </div>

        </section>
      </main>
    
<footer className="w-full bg-buttonColor p-12 text-white">
  <div className="flex items-center justify-between">
<div className="flex flex-col text-left	">
<h1 className="font-semibold opacity-100">Entre em contato em:</h1>
<h1 className="font-light opacity-65	">Telefone: (31) 90000-0000</h1>
<h1 className="font-light opacity-65	">Email: contato@niccidadania.org.br</h1>
<h1 className="font-light opacity-65	">Nossa Sede: Quinquin do mandú, 480</h1>
</div>

<div className="flex flex-col text-left	">
<h1 className="font-semibold opacity-100">Projeto NIC</h1>
<h1 className="font-light opacity-65	">Sobre nós</h1>
<h1 className="font-light opacity-65	">Projetos</h1>
<h1 className="font-light opacity-65	">Linha do tempo</h1>
<h1 className="font-light opacity-65	">Voluntaria-se</h1>
</div>

<div className="flex flex-col text-left	">
<h1 className="font-semibold opacity-100">Projeto NIC</h1>
<h1 className="font-light opacity-65">Sobre nós</h1>
<h1 className="font-light opacity-65">Projetos</h1>
<h1 className="font-light opacity-65">Linha do tempo</h1>
<h1 className="font-light opacity-65">Voluntaria-se</h1>
</div>  


<iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.5686986242204!2d-44.02960569023937!3d-19.900425981404112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69418f7ce5fbf%3A0x74f30f64fbc5420a!2sR.%20Bragan%C3%A7a%2C%20197%20-%20Novo%20Progresso%2C%20Contagem%20-%20MG%2C%2032140-480!5e0!3m2!1spt-BR!2sbr!4v1736229398058!5m2!1spt-BR!2sbr" 
className="rounded-lg w-96 h-60" 
allowFullScreen
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
></iframe>


  </div>
<div className="flex items-center justify-between"> 
<Image
className="w-40"
src={logo}
alt="Voluntários"
/>

<h1 className="font-normal text-sm">© 2024 ONG NIC Cidadania - Todos os direitos reservados.</h1>

<div className="flex">
<h1>Instagram</h1>
<h1>Instagram</h1>
</div>
</div>
</footer>

    </div>
  );
}
