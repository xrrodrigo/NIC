'use client'
import CountUp from 'react-countup';


export default function social() {

    return(

        <div className="w-full h-80 text-white flex background mb-11">
        <div className="h-full w-2/6 flex flex-col items-center justify-center">
        <h2 className="font-light text-2xl">Mais de</h2>
        <CountUp className="text-8xl font-extrabold p-4" enableScrollSpy={true} scrollSpyOnce={true} end={320}/>
        <h2 className="text-center max-w-72	font-normal">Famílias beneficiadas pelo projeto compartilhar</h2>
        </div>
        
        <div className="h-full w-2/6 flex flex-col items-center justify-center bg-orangeColor">
        <h2 className="font-light text-2xl">Mais de</h2>
        <CountUp className="text-8xl font-extrabold p-4" enableScrollSpy={true} scrollSpyOnce={true} end={830}/>
        <h2 className="text-center max-w-64	 font-normal">Alunos já passaram por projetos do NIC</h2>
        </div>

        <div className="h-full w-2/6 flex flex-col items-center justify-center">
        <h2 className="font-light text-2xl">Mais de</h2>
        <CountUp className="text-8xl font-extrabold p-4" enableScrollSpy={true} scrollSpyOnce={true} end={20}/>
        <h2 className="text-center max-w-80	font-normal">Anos ensinando, compartilhando e auxiliando pessoas em toda Contagem</h2>
        </div>

        </div>
    )
}