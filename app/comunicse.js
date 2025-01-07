import Image from "next/image";
import Link from 'next/link'

import white from "/public/img/comunicse_white.png"


import primaryNews from "/public/img/primaryNews.jpg"
import secondNews from "/public/img/secondNews.jpg"
import thirtNews from "/public/img/thirtNews.jpg"
import horizontallyNews from "/public/img/horizontallyNews.jpg"

export default function News() {

  return (
    <div id="news" className="w-full h-news bg-newsColor flex flex-col p-12 justify-center">
      <div>

        <div className="flex items-center justify-between	">
          <div className="w-24 h-8 bg-orangeColor rounded-lg flex items-center justify-center">
            <h1>Notícias</h1>
          </div>
          <Image alt="teste" className="w-36	" src={white} />
        </div>

        <div className="flex flex-col">


          <div className="flex gap-4 pt-4 text-white">


            <Link href="/news">
              <div className="w-news h-primaryNews news-card flex cursor-pointer">
                <div className="absolute z-40 w-card m-8 font-normal border-solid	border-l-4   border-thirtColor h-8 flex items-center">
                  <h2 className="pl-2">Esporte</h2>
                </div>
                <h1 className="absolute z-40 w-card h-primaryNews flex flex-col flex-wrap justify-end pb-8 pl-8 text-xl font-bold	">Obras do novo Restaurante Popular Ressaca avançam e unidade será inaugurada em 2025</h1>
                <Image alt="teste" className="w-full h-full rounded-3xl" src={primaryNews} />
              </div>
            </Link>

            <div className="flex flex-col h-primaryNews gap-4"  >


              <div className="w-full h-3/6 flex gap-4">

                <div className="w-3/6 h-full news-card gap-4 flex flex-col justify-end cursor-pointer">

                  <div className="absolute z-40 h-infoNews flex flex-col justify-between">
                    <div className=" ml-4 mt-8 font-normal border-solid	border-l-4 border-thirtColor h-8 flex items-center">
                      <h2 className="pl-2">Esporte</h2>
                    </div>
                    <h1 className="w-80 pl-4 pb-4 text-base font-bold">Estudantes do CEI Ressaca brilham em campeonatos de futsal feminino e conquistam títulos </h1>
                  </div>
                  <Image alt="teste" className="w-full h-full object-cover rounded-3xl" src={secondNews} />
                </div>

                <div className="w-3/6 h-full news-card gap-4 cursor-pointer">

                  <div className="absolute z-40 h-infoNews flex flex-col justify-between">
                    <div className="ml-4 mt-8 font-normal border-solid	border-l-4 border-thirtColor h-8 flex items-center">
                      <h2 className="pl-2">Esporte</h2>
                    </div>
                    <h1 className="w-80 pl-4 pb-4 text-base font-bold">Estudantes do CEI Ressaca brilham em campeonatos de futsal feminino e conquistam títulos </h1>
                  </div>

                  <Image alt="teste" className="w-full h-full object-cover rounded-3xl" src={thirtNews} />
                </div>
              </div>

              <div className="h-3/6 gap-4 news-card flex flex-col justify-end cursor-pointer">
                <div className="absolute z-40 h-infoNews flex flex-col justify-between">

                  <div className="ml-4 mt-8 font-normal border-solid	border-l-4 border-thirtColor h-8 flex items-center">
                    <h2 className="pl-2">Esportes</h2>
                  </div>

                  <h1 className="w-horizontalNews pl-4 pb-8 text-xl font-bold">Praça do Divino: local totalmente revitalizado e que contará, em 2025, com um ginásio poliesportivo</h1>
                </div>
                <Image alt="teste" className="w-full h-full object-cover rounded-3xl" src={horizontallyNews} />
              </div>
            </div>

          </div>




        </div>


      </div>
    </div>
  )
}